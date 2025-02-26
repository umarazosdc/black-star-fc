import React from 'react';
import { z } from 'zod';
import { FormControl, FormItem, FormField } from '@/components/ui/form';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '../ui/select';
import { PlayerSchema } from '@/lib/schema';
import { UseFormReturn } from 'react-hook-form';
import { positions } from '@/lib/data';

const FormPosition = ({
   form,
   field,
}: {
   form: UseFormReturn<z.infer<typeof PlayerSchema>>;
   field: 'position';
}) => {
   return (
      <FormField
         control={form.control}
         name={field}
         render={({ field }) => (
            <Select onValueChange={(value: string) => field.onChange(value)}>
               <SelectTrigger>
                  <FormItem className="w-full">
                     <FormControl>
                        <SelectValue placeholder="Position" {...field} />
                     </FormControl>
                  </FormItem>
               </SelectTrigger>
               <SelectContent>
                  {positions.map((position, key) => (
                     <SelectItem
                        key={key}
                        value={position.position.toLowerCase()}
                     >
                        {position.position}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         )}
      />
   );
};

export default FormPosition;
