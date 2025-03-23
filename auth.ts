import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/prisma";
import authConfig from "./auth.config";
import { getUserById, unSuspendUser } from "./lib/database/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: async ({ user }) => {
      if (!user?.id) return false;

      const existingUser = await getUserById(user.id);
      if (!existingUser) return false;

      const suspendedUntil = existingUser?.suspendedUntil;
      const now = new Date();

      // Block login if still suspended
      if (existingUser?.isSuspended && suspendedUntil && suspendedUntil > now) {
        return false;
      }

      // If suspension expired, lift suspension
      if (
        existingUser?.isSuspended &&
        suspendedUntil &&
        suspendedUntil <= now
      ) {
        await unSuspendUser(existingUser.id);
      }

      return true;
    },

    jwt: async ({ token }) => {
      try {
        if (!token.sub) return token;

        const existingUser = await getUserById(token.sub);

        if (!existingUser) return token;

        token.role = existingUser.role;
        token.id = token.sub;
        token.state = existingUser.state ?? undefined;
        token.email = existingUser.email;
        token.name = existingUser.name;
        token.image = existingUser.image;

        return token;
      } catch (error) {
        console.error("Error in JWT callback:", error);
        return token;
      }
    },

    session: async ({ token, session }) => {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
          state: token.state,
          id: token.id,
          image: token.image,
          email: token.email,
          name: token.name,
        },
      };
    },
  },
  ...authConfig,
});
