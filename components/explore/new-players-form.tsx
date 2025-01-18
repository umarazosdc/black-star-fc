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
import { heights, months, positions, roles, weights } from '@/lib/data';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const NewPlayersForm = () => {
   const form = useForm<z.infer<typeof PlayerSchema>>({
      defaultValues: {
         firstname: '',
         lastname: '',
         image: '',
         videos: [''],
         side: '',
         positon: '',
         height: 0,
         weight: 0,
         dob: '',
         nationality: '',
         achievements: [''],
      },
      resolver: zodResolver(PlayerSchema),
   });

   const handleAddPlayer = () => {
      console.log('Added...');
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(handleAddPlayer)}>
            <div className="space-y-6 flex flex-col">
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="image"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Image</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 className="text-sm"
                                 type="file"
                                 accept="image/*"
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
                        <FormItem>
                           <FormLabel>Videos</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 className="text-sm"
                                 type="file"
                                 accept="video/*"
                                 multiple
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
                        <FormItem>
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
                        <FormItem>
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
                     name="side"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <FormItem>
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
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Role"
                                       {...field}
                                    />
                                 </FormControl>
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
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Weight"
                                       {...field}
                                    />
                                 </FormControl>
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
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Height"
                                       {...field}
                                    />
                                 </FormControl>
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
                        <FormItem>
                           <Popover>
                              <PopoverTrigger asChild className="w-full">
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
                                          format(Number(field.value), 'PPP')
                                       ) : (
                                          <span>Date of Birth</span>
                                       )}
                                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                 </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                 className="w-auto p-0 px-2 py-2"
                                 align="start"
                              >
                                 <div className="flex justify-between gap-2 items-center">
                                    <Select>
                                       <SelectTrigger>
                                          <SelectValue
                                             placeholder="Month"
                                             {...field}
                                          />
                                       </SelectTrigger>
                                       <SelectContent>
                                          {months.map((month, key) => (
                                             <SelectItem
                                                key={key}
                                                value={month}
                                                onChange={field.onChange}
                                             >
                                                {month}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </Select>
                                    <Select>
                                       <SelectTrigger>
                                          <SelectValue
                                             placeholder="Year"
                                             {...field}
                                          />
                                       </SelectTrigger>
                                       <SelectContent></SelectContent>
                                    </Select>
                                 </div>
                                 <Calendar
                                    mode="single"
                                    selected={
                                       field.value
                                          ? new Date(field.value)
                                          : undefined
                                    }
                                    onSelect={field.onChange}
                                 />
                              </PopoverContent>
                           </Popover>
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="nationality"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <SelectValue
                                 placeholder="Nationality"
                                 {...field}
                              />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="nigerian">Nigerian</SelectItem>
                           </SelectContent>
                        </Select>
                     )}
                  />
               </FlexAligned>
            </div>
         </form>
      </Form>
   );
};

export default NewPlayersForm;
