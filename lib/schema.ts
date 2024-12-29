import * as z from 'zod';

export const LoginSchema = z.object({
   email: z.string().email({ message: 'Email is required' }),
   password: z.string(),
});

export const RegisterSchema = z
   .object({
      firstname: z.string(),
      lastname: z.string(),
      email: z.string().email(),
      password: z.string(),
      confirmPassword: z.string(),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match!",
      path: ['confirmPassword'],
   });
