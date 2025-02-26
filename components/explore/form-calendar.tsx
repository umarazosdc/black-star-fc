import React from 'react';
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
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { format, setMonth, setYear } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { months, years } from '@/lib/data';
import { UseFormReturn } from 'react-hook-form';
import { PlayerSchema } from '@/lib/schema';

const FormCalendar = ({
   form,
   field,
}: {
   form: UseFormReturn<z.infer<typeof PlayerSchema>>;
   field: 'dob';
}) => {
   const [selectedMonth, setSelectedMonth] = React.useState(
      new Date().getMonth()
   );
   const [selectedYear, setSelectedYear] = React.useState(
      new Date().getFullYear()
   );
   return (
      <FormField
         control={form.control}
         name={field}
         render={({ field }) => (
            <FormItem className="w-full">
               <Popover>
                  <PopoverTrigger asChild>
                     <FormControl>
                        <Button
                           variant={'outline'}
                           className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                           )}
                        >
                           {field.value ? (
                              format(field.value, 'PPP')
                           ) : (
                              <span>Date of Birth</span>
                           )}
                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                     </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                     <div className="flex justify-between gap-2 items-center">
                        <Select
                           onValueChange={(value: string) => {
                              const monthIndex = months.indexOf(value);
                              setSelectedMonth(monthIndex);
                              const updatedDate = setMonth(
                                 field.value || new Date(),
                                 monthIndex
                              );
                              field.onChange(updatedDate);
                              console.log(field.value);
                           }}
                           defaultValue={months[selectedMonth]}
                        >
                           <SelectTrigger>
                              <SelectValue placeholder="Month" />
                           </SelectTrigger>
                           <SelectContent>
                              {months.map((month: string, key) => (
                                 <SelectItem key={key} value={month}>
                                    {month}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                        <Select
                           onValueChange={(value: string) => {
                              const year = parseInt(value, 10);
                              setSelectedYear(year);
                              const updatedDate = setYear(
                                 field.value || new Date(),
                                 year
                              );
                              field.onChange(updatedDate);
                           }}
                           defaultValue={selectedYear.toString()}
                        >
                           <SelectTrigger>
                              <SelectValue placeholder="Year" />
                           </SelectTrigger>
                           <SelectContent>
                              {years.map((year, key) => (
                                 <SelectItem
                                    key={key}
                                    value={year.toString()}
                                    onChange={field.onChange}
                                 >
                                    {year}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>
                     <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                           date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                        month={field.value}
                        onMonthChange={field.onChange}
                     />
                  </PopoverContent>
               </Popover>
               <FormMessage />
            </FormItem>
         )}
      />
   );
};

export default FormCalendar;
