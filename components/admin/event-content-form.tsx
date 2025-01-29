'use client';
import { EventSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Calendar } from '../ui/calendar';
import { Textarea } from '../ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const EventContentForm = () => {
   const form = useForm<z.infer<typeof EventSchema>>({
      resolver: zodResolver(EventSchema),
      defaultValues: {
         name: '',
         venue: '',
         date: undefined,
         time: '',
      },
   });

   const handleEventSubmit = (value: z.infer<typeof EventSchema>) => {
      console.log(value);
   };
   return (
      <Form {...form}>
         <form
            className="space-y-3"
            onSubmit={form.handleSubmit(handleEventSubmit)}
         >
            <FormField
               name="name"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Event name</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="Event name"
                           {...field}
                           onChange={(e) => field.onChange(e.target.value)}
                           className="text-sm"
                        />
                     </FormControl>
                  </FormItem>
               )}
            />
            <FormField
               name="venue"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Venue</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="Venue"
                           {...field}
                           onChange={(e) => field.onChange(e.target.value)}
                           className="text-sm"
                        />
                     </FormControl>
                  </FormItem>
               )}
            />
            <div className="flex items-center gap-4">
               <FormField
                  name="date"
                  control={form.control}
                  render={({ field }) => (
                     <FormItem>
                        <Popover>
                           <PopoverTrigger asChild>
                              <Button
                                 variant="outline"
                                 className={cn(
                                    !field.value && 'text-muted-foreground'
                                 )}
                              >
                                 {field.value ? (
                                    format(field.value, 'PPP')
                                 ) : (
                                    <span>Pick a date</span>
                                 )}
                                 <CalendarIcon className="size-4 ml-auto text-muted-foreground" />
                              </Button>
                           </PopoverTrigger>
                           <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                 mode="single"
                                 selected={field.value}
                                 onSelect={field.onChange}
                                 disabled={(date) => date < new Date()}
                                 initialFocus
                              />
                           </PopoverContent>
                        </Popover>
                        <FormControl></FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  name="time"
                  control={form.control}
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input
                              placeholder="Time"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value)}
                              className="text-sm"
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
            </div>
            <FormField
               name="about"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Additional note</FormLabel>
                     <FormControl>
                        <Textarea
                           placeholder="Detail about event..."
                           {...field}
                           onChange={(e) => field.onChange(e.target.value)}
                           className="bg-primary w-full text-sm resize-none"
                        />
                     </FormControl>
                  </FormItem>
               )}
            />
            <Button
               className="w-full bg-accent text-primary hover:bg-accent"
               type="submit"
            >
               Done
            </Button>
         </form>
      </Form>
   );
};

export default EventContentForm;
