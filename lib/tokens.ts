import { getVerificationTokenByEmail } from "./database/queries";
import { db } from "./prisma";

export const generateVerificationToken = async (email: string) => {
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({ where: { id: existingToken.id } });
  }

  const token = String(Math.floor(100000 + Math.random() * 900000));

  const expires = new Date(Date.now() + 60 * 60 * 300);

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      expires,
      token,
    },
  });

  return verificationToken;
};
