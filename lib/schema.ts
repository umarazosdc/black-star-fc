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

export const PlayerSchema = z.object({
   firstname: z
      .string()
      .regex(/^[A-Za-z]+$/, {
         message:
            'First name must contain only letters with no spaces or special characters.',
      })
      .min(1, { message: 'First name cannot be empty.' }),
   lastname: z
      .string()
      .regex(/^[A-Za-z]+$/, {
         message:
            'Last name must contain only letters with no spaces or special characters.',
      })
      .min(1, { message: 'Last name cannot be empty.' }),
   image: z.string(),
   videos: z.array(z.string()),
   side: z.string(),
   positon: z.string(),
   height: z.number(),
   weight: z.number(),
   dob: z.string(),
   nationality: z.string(),
   achievements: z.array(z.string()).optional(),
   stats: z.array(z.object({ stat: z.number() })),
});
