import { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from './lib/schema';
import { getUserByEmail } from './lib/database/queries';
import bcrypt from 'bcryptjs';

export default {
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
      Credentials({
         credentials: {
            email: {},
            password: {},
         },
         authorize: async (credentials) => {
            const validatedValues = LoginSchema.safeParse(credentials);
            if (!validatedValues.success) {
               return null;
            }

            const { email, password } = validatedValues.data;

            // Check if email already exists
            const user = await getUserByEmail(email);
            if (!user || !user.password) {
               return null;
            }

            // Check if password is correct
            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
               return null;
            }

            return {
               ...user,
               city: user.city ?? undefined,
            };
         },
      }),
   ],
} satisfies NextAuthConfig;
