'use client';
import { PlayerSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
   Form,
   FormControl,
   FormLabel,
   FormItem,
   FormField,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FlexAligned from '../utils/flex-aligned';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '../ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { heights, months, positions, roles, weights, years } from '@/lib/data';
import { Button } from '../ui/button';
import { format, setMonth, setYear } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const NewPlayersForm = () => {
   const form = useForm<z.infer<typeof PlayerSchema>>({
      defaultValues: {
         firstname: '',
         lastname: '',
         image: undefined,
         videos: undefined,
         side: '',
         position: '',
         height: 0,
         weight: 0,
         dob: undefined,
         nationality: '',
         stats: { spd: 0, sho: 0, def: 0, dri: 0, pac: 0, pas: 0 },
      },
      resolver: zodResolver(PlayerSchema),
   });

   const [selectedMonth, setSelectedMonth] = React.useState(
      new Date().getMonth()
   );
   const [selectedYear, setSelectedYear] = React.useState(
      new Date().getFullYear()
   );

   const handlePlayerSubmit = (value: z.infer<typeof PlayerSchema>) => {
      console.log(value);
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(handlePlayerSubmit)}>
            <div className="space-y-6 flex flex-col">
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="image"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Image</FormLabel>
                           <FormControl>
                              <Input
                                 className="text-sm"
                                 type="file"
                                 accept="image/*"
                                 onChange={(e) => {
                                    if (typeof window !== 'undefined') {
                                       field.onChange(e.target.files);
                                    }
                                 }}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="videos"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Videos</FormLabel>
                           <FormControl>
                              <Input
                                 className="text-sm"
                                 type="file"
                                 accept="video/*"
                                 multiple
                                 onChange={(e) => {
                                    if (typeof window !== 'undefined') {
                                       field.onChange(e.target.files);
                                    }
                                 }}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="firstname"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>First name</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 placeholder="Isa"
                                 className="text-sm"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="lastname"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Last name</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 placeholder="Umar"
                                 className="text-sm"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="position"
                     render={({ field }) => (
                        <Select
                           onValueChange={(value) => field.onChange(value)}
                        >
                           <SelectTrigger>
                              <FormItem className="w-full">
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Position"
                                       {...field}
                                    />
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
                  <FormField
                     control={form.control}
                     name="side"
                     render={({ field }) => (
                        <Select
                           onValueChange={(value) => field.onChange(value)}
                        >
                           <SelectTrigger>
                              <FormItem className="w-full">
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Role"
                                       {...field}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {roles.map((role, key) => (
                                 <SelectItem
                                    key={key}
                                    value={role.role.toLowerCase()}
                                 >
                                    {role.role}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="weight"
                     render={({ field }) => (
                        <Select
                           onValueChange={(value) =>
                              field.onChange(Number(value))
                           }
                        >
                           <SelectTrigger>
                              <FormItem className="w-full">
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Weight"
                                       {...field}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {weights.map((weight, key) => (
                                 <SelectItem
                                    key={key}
                                    value={weight.weight.toString()}
                                 >
                                    {weight.weight}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="height"
                     render={({ field }) => (
                        <Select
                           onValueChange={(value) =>
                              field.onChange(Number(value))
                           }
                        >
                           <SelectTrigger>
                              <FormItem className="w-full">
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Height"
                                       {...field}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {heights.map((height, key) => (
                                 <SelectItem
                                    key={key}
                                    value={height.height.toString()}
                                 >
                                    {height.height}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="dob"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <Popover>
                              <PopoverTrigger asChild>
                                 <FormControl>
                                    <Button
                                       variant={'outline'}
                                       className={cn(
                                          'w-full pl-3 text-left font-normal',
                                          !field.value &&
                                             'text-muted-foreground'
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
                              <PopoverContent
                                 className="w-auto p-0"
                                 align="start"
                              >
                                 <div className="flex justify-between gap-2 items-center">
                                    <Select
                                       onValueChange={(value) => {
                                          const monthIndex =
                                             months.indexOf(value);
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
                                             <SelectItem
                                                key={key}
                                                value={month}
                                             >
                                                {month}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </Select>
                                    <Select
                                       onValueChange={(value) => {
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
                                       date > new Date() ||
                                       date < new Date('1900-01-01')
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
                  <FormField
                     control={form.control}
                     name="nationality"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <Select
                              onValueChange={(value) => field.onChange(value)}
                           >
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue
                                       placeholder="Nationality"
                                       {...field}
                                    />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 <SelectItem value="nigerian">
                                    Nigerian
                                 </SelectItem>
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </FlexAligned>
               <div className="flex gap-3 items-center">
                  <FormField
                     control={form.control}
                     name="stats.spd"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Speed</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="number"
                                 className="text-sm"
                                 onChange={(e) =>
                                    field.onChange(parseInt(e.target.value, 10))
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="stats.def"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Defence</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="number"
                                 className="text-sm"
                                 onChange={(e) =>
                                    field.onChange(parseInt(e.target.value, 10))
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="stats.sho"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Shot</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="number"
                                 className="text-sm"
                                 onChange={(e) =>
                                    field.onChange(parseInt(e.target.value, 10))
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="stats.pas"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Pass</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="number"
                                 className="text-sm"
                                 onChange={(e) =>
                                    field.onChange(parseInt(e.target.value, 10))
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="stats.pac"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Pacing</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="number"
                                 className="text-sm"
                                 onChange={(e) =>
                                    field.onChange(parseInt(e.target.value, 10))
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="stats.dri"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel>Dribble</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="number"
                                 className="text-sm"
                                 onChange={(e) =>
                                    field.onChange(parseInt(e.target.value, 10))
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>
               <Button
                  className="bg-accent text-primary hover:bg-accent md:w-fit md:ml-auto"
                  type="submit"
               >
                  Add
               </Button>
            </div>
         </form>
      </Form>
   );
};

export default NewPlayersForm;
