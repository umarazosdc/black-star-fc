import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
   interface Session {
      user: {
         role?: string;
         city?: string;
         id?: string;
         supabaseAccessToken?: string;
      } & DefaultSession['user'];
   }

   interface User extends DefaultUser {
      role?: string;
      city?: string;
      id?: string;
      supabaseAccessToken?: string;
   }
}

declare module 'next-auth/jwt' {
   interface JWT {
      role?: string;
      city?: string;
      id?: string;
      supabaseAccessToken?: string;
   }
}
