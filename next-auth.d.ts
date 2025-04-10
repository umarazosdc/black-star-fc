import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      state?: string;
      id: string;
      image?: string | null;
      email?: string | null;
      name?: string | null;
      isVerified?: Date | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string;
    state?: string;
    id: string;
    image?: string | null;
    email?: string | null;
    name?: string | null;
    isVerified?: Date | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    state?: string;
    id: string; // Ensure `id` is always a string
    image?: string | null;
    email?: string | null;
    name?: string | null;
    isVerified?: Date | null;
  }
}
