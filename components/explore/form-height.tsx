import React from 'react';
import { PlayerSchema } from '@/lib/schema';
import { z } from 'zod';
import {
   FormControl,
   FormItem,
   FormField,
   FormMessage,
} from '@/components/ui/form';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '../ui/select';
import { UseFormReturn } from 'react-hook-form';
import { heights } from '@/lib/data';

const FormHeight = ({
   form,
   field,
}: {
   form: UseFormReturn<z.infer<typeof PlayerSchema>>;
   field: 'height';
}) => {
   return (
      <FormField
         control={form.control}
         name={field}
         render={({ field }) => (
            <Select
               onValueChange={(value: string) => field.onChange(Number(value))}
            >
               <SelectTrigger>
                  <FormItem className="w-full">
                     <FormControl>
                        <SelectValue placeholder="Height" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               </SelectTrigger>
               <SelectContent>
                  {heights.map((height, key) => (
                     <SelectItem key={key} value={height.height.toString()}>
                        {height.height}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         )}
      />
   );
};

export default FormHeight;
