import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/schema";
import { getUserByEmail } from "./lib/database/queries";
import bcrypt from "bcryptjs";

export default {
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedValues = LoginSchema.safeParse(credentials);
        if (!validatedValues.success) {
          throw new Error(String(validatedValues.error));
        }

        const { email, password } = validatedValues.data;

        // Check if account exists
        const user = await getUserByEmail(email);
        if (!user || !user.password) {
          throw new Error(`${email} doesn't exits.`);
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
          throw new Error("Incorrect password.");
        }

        return {
          ...user,
          state: user.state ?? undefined,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
