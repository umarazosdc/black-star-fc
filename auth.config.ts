import { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';

export default {
   providers: [
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      Facebook({
         clientId: process.env.FACEBOOK_CLIENT_ID,
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
   ],
} satisfies NextAuthConfig;
