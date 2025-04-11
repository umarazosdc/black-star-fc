import {
  getPasswordResetTokenByEmail,
  getVerificationTokenByEmail,
} from "./database/queries";
import { db } from "./prisma";
import { v4 as uuidv4 } from "uuid";

export const generateVerificationToken = async (email: string) => {
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({ where: { id: existingToken.id } });
  }

  const token = String(Math.floor(100000 + Math.random() * 900000));

  const expires = new Date(Date.now() + 2 * 60 * 1000);

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      expires,
      token,
    },
  });

  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({ where: { id: existingToken.id } });
  }

  const token = uuidv4();

  const expires = new Date(Date.now() + 2 * 60 * 1000);

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      expires,
      token,
    },
  });

  return passwordResetToken;
};
