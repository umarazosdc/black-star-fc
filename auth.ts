import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Session } from "next-auth";
import { db } from "@/lib/prisma";
import authConfig from "./auth.config";
import { getUserById, unSuspendUser } from "./lib/database/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      if (!user || !user?.id) return false;

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

    async jwt({ token, user }) {
      if (user) token.id = user.id as string;

      if (!token.sub || !token) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;
      token.id = existingUser.id;
      token.state = existingUser.state ?? undefined;
      token.email = existingUser.email;
      token.name = existingUser.name;
      token.image = existingUser.image;

      return token;
    },

    async session({ token, session }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role as string | undefined,
          state: token.state as string | undefined,
          id: token.id as string | undefined,
          image: token.image ?? null,
          email: token.email ?? null,
          name: token.name ?? null,
        },
      } as Session;
    },
  },
  ...authConfig,
});
