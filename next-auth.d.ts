import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      state?: string;
      id?: string;
      image?: string;
      email?: string;
      name?: string;
      supabaseAccessToken?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string;
    state?: string;
    id?: string;
    image?: string;
    email?: string;
    name?: string;
    supabaseAccessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    city?: string;
    id?: string;
    image?: string;
    email?: string;
    name?: string;
    supabaseAccessToken?: string;
  }
}
