import { z } from 'zod';
import { LoginSchema, RegisterSchema } from './schema';

export const login = async (values: z.infer<typeof LoginSchema>) => {
   const validatedValues = LoginSchema.safeParse(values);
   if (validatedValues.error) {
      return { error: 'Error' };
   }
   return { success: 'Valid' };
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
   const validatedValues = RegisterSchema.safeParse(values);
   if (validatedValues.error) {
      return { error: 'Error' };
   }
   return { success: 'Valid' };
};
