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
import { weights } from '@/lib/data';

const FormWeight = ({
   form,
   field,
}: {
   form: UseFormReturn<z.infer<typeof PlayerSchema>>;
   field: 'weight';
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
                        <SelectValue placeholder="Weight" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               </SelectTrigger>
               <SelectContent>
                  {weights.map((weight, key) => (
                     <SelectItem key={key} value={weight.weight.toString()}>
                        {weight.weight}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         )}
      />
   );
};

export default FormWeight;
