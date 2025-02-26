import React from 'react';
import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
} from '../ui/form';
import { Input } from '../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { PlayerSchema } from '@/lib/schema';

const PlayerStat = ({
   form,
   name,
   stat,
}: {
   form: UseFormReturn<z.infer<typeof PlayerSchema>>;
   name: string;
   stat: 'spd' | 'def' | 'sho' | 'pas' | 'pac' | 'dri';
}) => {
   return (
      <FormField
         control={form.control}
         name={`stats.${stat}`}
         render={({ field }) => (
            <FormItem className="w-full">
               <FormLabel>{name}</FormLabel>
               <FormControl>
                  <Input
                     {...field}
                     type="number"
                     className="text-sm"
                     value={field.value ?? ''}
                     onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === '' ? '' : parseInt(value, 10));
                     }}
                     placeholder="0"
                  />
               </FormControl>
            </FormItem>
         )}
      />
   );
};

export default PlayerStat;
