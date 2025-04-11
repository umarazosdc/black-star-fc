"use server";
import { z } from "zod";
import {
  EmailVerificationSchema,
  LoginSchema,
  PasswordVerificationSchema,
  PlayerSchema,
  RegisterSchema,
} from "./schema";
import {
  getPasswordResetTokenByToken,
  getPreUploadedPlayers,
  getUserByEmail,
  getVerificationTokenByEmail,
} from "./database/queries";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getAge } from "./date";
import {
  generatePasswordResetToken,
  generateVerificationToken,
} from "./tokens";
import { sendResetPasswordEmail, sendVerificationEmail } from "./mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedValues = LoginSchema.safeParse(values);
  if (validatedValues.error) {
    return { error: "Invalid credentials" };
  }
  const { email, password } = validatedValues.data;

  // Check if email exists
  const user = await getUserByEmail(email);
  if (!user || !user.email || !user.password) {
    return { error: "Email does not exits" };
  }

  // Check if password is correct
  const passwordMatch = await bcrypt.compare(password, user!.password);

  // If password is incorrect
  if (!passwordMatch) {
    return { error: "Incorrect password" };
  }

  // Check if user is suspended
  if (user.suspendedUntil && user.suspendedUntil > new Date()) {
    return {
      error: `Account is suspended until ${user.suspendedUntil.toUTCString()}`,
    };
  }

  // Check if account is verified
  if (!user.isVerified) {
    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(user.email, verificationToken.token);

    return { verifyEmail: true, email: user.email };
  }

  return { status: "success" };
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedValues = RegisterSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: "Invalid credentials" };
  }

  // Datas
  const { email, password, confirmPassword, firstname, lastname } =
    validatedValues.data;

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  // Check if email already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already exists" };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(confirmPassword, 10);

  // Getting name as a single string
  const name = `${firstname} ${lastname}`;

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await generateVerificationToken(email);

    return { success: "Created an account successfully." };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Error creating user, please try again" };
  }
};

// Adding new players
export const newPlayer = async (values: z.infer<typeof PlayerSchema>) => {
  const validatedValues = PlayerSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid player data" };
  }

  // Destructure validated values
  const {
    firstname,
    lastname,
    side,
    position,
    height,
    weight,
    dob,
    stats,
    videos,
    thumbnail,
    statImage,
  } = validatedValues.data;

  try {
    await db.preUploadedPlayer.create({
      data: {
        firstname,
        lastname,
        weight,
        dob: new Date(dob).toISOString(),
        side,
        videos,
        thumbnail,
        image: statImage,
        position,
        height,
        stats: {
          create: {
            speed: stats.spd,
            dribble: stats.dri,
            pass: stats.pas,
            pace: stats.pac,
            defence: stats.def,
            shot: stats.sho,
          },
        },
      },
    });
    revalidatePath("/dashboard/new");
    return {
      success: `Successfully added ${firstname + " " + lastname} to cart`,
    };
  } catch (error) {
    console.error("Error adding player to cart", error);
    return { error: "Error adding player cart" };
  }
};

export const editPlayer = async (values: z.infer<typeof PlayerSchema>) => {
  const validatedValues = PlayerSchema.safeParse(values);

  if (!validatedValues.success) {
    console.log(validatedValues.error.format());
    return { error: "Invalid player data" };
  }
  const {
    firstname,
    lastname,
    side,
    position,
    height,
    weight,
    dob,
    stats,
    videos,
    thumbnail,
    statImage,
    id,
  } = validatedValues.data;

  try {
    await db.player.update({
      where: { id },
      data: {
        firstname,
        lastname,
        weight,
        dob: new Date(dob).toISOString(),
        side,
        videos,
        thumbnail,
        image: statImage,
        position,
        height,
        stats: {
          create: {
            speed: stats.spd,
            dribble: stats.dri,
            pass: stats.pas,
            pace: stats.pac,
            defence: stats.def,
            shot: stats.sho,
          },
        },
      },
    });
    revalidatePath("/dashboard/new");
    return {
      success: `Successfully edited ${firstname + " " + lastname}`,
    };
  } catch (error) {
    console.error("Error editing player", error);
    return { error: "Error editing player" };
  }
};

export const addNewPlayers = async () => {
  try {
    const preUploadedPlayers = await getPreUploadedPlayers();

    if (!preUploadedPlayers.length) {
      return { error: "No player to add, add players" };
    }

    const createdPlayers = await db.$transaction(
      preUploadedPlayers.map((player) =>
        db.player.create({
          data: {
            firstname: player.firstname,
            lastname: player.lastname,
            image: player.thumbnail,
            age: getAge(player.dob),
            side: player.side,
            position: player.position,
            weight: player.weight,
            nationality: "Nigerian",
            height: player.height,
            dob: player.dob,
            videos: player.videos,
            thumbnail: player.thumbnail,
          },
        })
      )
    );

    // Step 2: Transfer Stats to the newly created Players
    await Promise.all(
      preUploadedPlayers.map(async (player, index: number) => {
        await db.stats.updateMany({
          where: { preUploadedPlayerId: player.id },
          data: {
            playerId: createdPlayers[index].id,
            preUploadedPlayerId: null,
          },
        });
      })
    );

    // Step 3: Delete preUploadedPlayers
    await db.preUploadedPlayer.deleteMany();

    revalidatePath("/dashboard/players");
    return preUploadedPlayers.length > 1
      ? { success: "Successfully added new players" }
      : { success: "Successfully added new player" };
  } catch (error) {
    console.error("Error adding new players:", error);
    return { error: "Error adding new players" };
  }
};

export const verify = async (pin: string, email: string) => {
  try {
    const verificationToken = await getVerificationTokenByEmail(email);

    if (!verificationToken) {
      return { error: "No verification token found" };
    }

    // Check if token has expired
    if (verificationToken?.expires < new Date()) {
      return { error: "Token expired" };
    }

    // Check if token matches the provided pin
    if (verificationToken?.token !== pin) {
      return { error: "Code doesn't match" };
    }

    // Update user verification status in the database
    await db.user.update({
      where: { email: email },
      data: { isVerified: new Date() },
    });

    // Delete the verification token after successful verification
    await db.verificationToken.delete({
      where: { id: verificationToken.id },
    });

    return { status: "success" };
  } catch (error) {
    console.error("Verification error:", error);
    return { error: "An error occurred during verification" };
  }
};

export const verifyEmail = async (
  value: z.infer<typeof EmailVerificationSchema>
) => {
  const validatedValues = EmailVerificationSchema.safeParse(value);

  if (!validatedValues.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedValues.data;

  const user = await getUserByEmail(email);
  if (!user) {
    return { error: "Email does not exist" };
  }

  const verificationToken = await generatePasswordResetToken(email);

  await sendResetPasswordEmail(user.email, verificationToken.token);
  return { status: "success" };
};

export const resetPassword = async (
  value: z.infer<typeof PasswordVerificationSchema>,
  token: string
) => {
  const validatedValue = PasswordVerificationSchema.safeParse(value);
  if (!validatedValue.success) {
    return { error: "Invalid password" };
  }
  const { password } = validatedValue.data;

  const verificationToken = await getPasswordResetTokenByToken(token);
  if (!verificationToken) {
    return { error: "No verification token found" };
  }

  // Check if token has expired
  if (verificationToken?.expires < new Date()) {
    return { error: "Token expired" };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update user password in the database
  await db.user.update({
    where: { email: verificationToken.email },
    data: { password: hashedPassword },
  });

  // Delete the verification token after successful password reset
  await db.passwordResetToken.delete({
    where: { id: verificationToken.id },
  });
  return { status: "success" };
};
