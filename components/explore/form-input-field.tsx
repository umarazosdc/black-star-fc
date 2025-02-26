import React from 'react';
import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { PlayerSchema } from '@/lib/schema';

const FormInputField = ({
   form,
   field,
    name,
   placeholder
}: {
   form: UseFormReturn<z.infer<typeof PlayerSchema>>;
   field: 'firstname' | 'lastname';
        name: string;
        placeholder: string;
}) => {
   return (
      <FormField
         control={form.control}
         name={field}
         render={({ field }) => (
            <FormItem className="w-full">
               <FormLabel>{name}</FormLabel>
               <FormControl>
                  <Input {...field} placeholder={placeholder}className="text-sm" />
               </FormControl>
               <FormMessage />
            </FormItem>
         )}
      />
   );
};

export default FormInputField;
