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
   image: z.instanceof(FileList),
   videos: z.instanceof(FileList),
   side: z.string(),
   position: z.string(),
   height: z.number(),
   weight: z.number(),
   dob: z.date(),
   nationality: z.string(),
   stats: z.object({
      spd: z.number().min(1, 'Speed cannot be empty.').max(100, 'Max is 100.'),
      def: z
         .number()
         .min(1, 'Defence cannot be empty.')
         .max(100, 'Max is 100.'),
      sho: z.number().min(1, 'Shoot cannot be empty.').max(100, 'Max is 100.'),
      pas: z.number().min(1, 'Pass cannot be empty.').max(100, 'Max is 100.'),
      pac: z.number().min(1, 'Pacing cannot be empty.').max(100, 'Max is 100.'),
      dri: z
         .number()
         .min(1, 'Dribble cannot be empty.')
         .max(100, 'Max is 100.'),
   }),
});

export const EventSchema = z.object({
   name: z.string().min(1, 'Event name cannot be empty.').max(25, 'Max is 25.'),
   venue: z.string().min(1, 'Venue cannot be empty.'),
   date: z.date(),
   time: z.string(),
   about: z.string().optional(),
});
