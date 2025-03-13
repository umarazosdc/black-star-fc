import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/prisma";
import authConfig from "./auth.config";
import { getUserById, unSuspendUser } from "./lib/database/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  secret: process.env.SECRET,
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
      if (token.sub) {
        const existingUser = await getUserById(token.sub);
        if (!existingUser) {
          return token;
        }
        token.role = existingUser.role;
        token.state = existingUser.state ?? undefined;
        token.id = token.sub;
        token.image = existingUser.image ?? undefined;
        token.email = existingUser.email;
        token.name = existingUser.name;
      }
      return token;
    },

    session: async ({ token, session }) => {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role as string,
          state: token.state as string,
          id: token.id as string,
          image: token.image as string,
          email: token.email as string,
          name: token.name as string,
        },
      };
    },
  },
  ...authConfig,
});
