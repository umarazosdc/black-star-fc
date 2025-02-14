'use server';
import { z } from 'zod';
import { LoginSchema, RegisterSchema } from './schema';
import { getUserByEmail } from './database/queries';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/prisma';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof LoginSchema>) => {
   const validatedValues = LoginSchema.safeParse(values);
   if (validatedValues.error) {
      return { error: 'Invalid credentials' };
   }
   const { email, password } = validatedValues.data;

   // Check if email exists
   const user = await getUserByEmail(email);
   if (!user || !user.email || !user.password) {
      return { error: 'Email does not exits' };
   }

   // Check if password is correct
   const passwordMatch = await bcrypt.compare(password, user!.password);

   // If password is incorrect
   if (!passwordMatch) {
      return { error: 'Incorrect password' };
   }

   // If everything is correct
   try {
      await signIn('credentials', {
         email,
         password,
      });
      return { success: 'Successfully signed in' };
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case 'CredentialsSignin':
               return { error: 'Invalid credentials' };
            default:
               return { error: 'Something went wrong' };
         }
      }
      throw error;
   }
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
   const validatedValues = RegisterSchema.safeParse(values);
   if (!validatedValues.success) {
      return { error: 'Invalid credentials' };
   }

   // Datas
   const { firstname, lastname, email, password, confirmPassword } =
      validatedValues.data;

   // Check if password and confirm password match
   if (password !== confirmPassword) {
      return { error: 'Passwords do not match' };
   }

   // Check if email already exists
   const existingUser = await getUserByEmail(email);
   if (existingUser) {
      return { error: 'Email already exists' };
   }

   // Hash password
   const hashedPassword = await bcrypt.hash(confirmPassword, 10);

   // Getting name as a single string
   const name = `${firstname} ${lastname}`;

   try {
      await db.user.create({
         data: {
            name,
            email,
            password: hashedPassword,
         },
      });

      // // Checking if new user was created
      // if (!newUser) {
      //    return { error: 'Failed to create user in the database' };
      // }

      // // Assigning Supabase user role
      // const { error } = await supabase
      //    .from('user_roles')
      //    .insert([{ id: newUser.id, role: newUser.role }]);

      // // Handling supabase error
      // if (error) {
      //    console.error('Error inserting data into supabase table: ', error);
      // }

      return { success: 'User created' };
   } catch (error) {
      console.error('Error creating user:', error);
      return { error: 'Error creating user, please try again' };
   }
};
