"use server";
import { z } from "zod";
import { LoginSchema, PlayerSchema, RegisterSchema } from "./schema";
import { getPreUploadedPlayers, getUserByEmail } from "./database/queries";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
// import { Resend } from "resend";
import { revalidatePath } from "next/cache";
import { getAge } from "./date";

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

  // Get suspension date
  const suspendedUntil = user.suspendedUntil;

  // If everything is correct
  try {
    await signIn("credentials", {
      email,
      password,
    });
    return { success: "Successfully signed in" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        case "AccessDenied":
          return {
            error: `Account is suspended until ${suspendedUntil?.toUTCString()}`,
          };
        default:
          console.log("Something went wrong:", error);
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedValues = RegisterSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: "Invalid credentials" };
  }

  // Datas
  const { email, password, confirmPassword } = validatedValues.data;

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
  // const hashedPassword = await bcrypt.hash(confirmPassword, 10);

  // Getting name as a single string
  // const name = `${firstname} ${lastname}`;

  // Email verification
  // let data = "";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    // await db.user.create({
    //    data: {
    //       name,
    //       email,
    //       password: hashedPassword,
    //    },
    // });

    return { success: "User created" };
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
