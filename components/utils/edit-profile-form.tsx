'use client';
import { EditProfileSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '../ui/form';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '../ui/select';
import { positions } from '@/lib/data';

const EditProfileForm = () => {
   const form = useForm<z.infer<typeof EditProfileSchema>>({
      resolver: zodResolver(EditProfileSchema),
      defaultValues: {
         name: '',
         image: undefined,
         bio: '',
         state: '',
         phone: undefined,
         preference: '',
      },
   });

   const handleEditProfileSubmit = (
      values: z.infer<typeof EditProfileSchema>
   ) => {
      console.log(values);
   };
   return (
      <Form {...form}>
         <form
            className="space-y-4"
            id="edit-profile-form"
            onSubmit={form.handleSubmit(handleEditProfileSubmit)}
         >
            <FormField
               name="name"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-xs">Name</FormLabel>
                     <FormControl>
                        <input
                           {...field}
                           placeholder="Full name"
                           className="w-full bg-inherit border-b border-secondary text-sm focus:outline-none"
                        />
                     </FormControl>
                  </FormItem>
               )}
            />
            <FormField
               name="bio"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-xs">Bio</FormLabel>
                     <FormControl>
                        <input
                           {...field}
                           placeholder="About you"
                           className="w-full bg-inherit border-b border-secondary text-sm focus:outline-none"
                        />
                     </FormControl>
                  </FormItem>
               )}
            />
            <FormField
               name="state"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-xs">State</FormLabel>
                     <FormControl>
                        <input
                           {...field}
                           placeholder="Current state"
                           className="w-full bg-inherit border-b border-secondary text-sm focus:outline-none"
                        />
                     </FormControl>
                  </FormItem>
               )}
            />
            <FormField
               name="phone"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-xs">Phone no</FormLabel>
                     <FormControl>
                        <input
                           {...field}
                           placeholder="+234"
                           onChange={(e) => {
                              field.onChange(parseInt(e.target.value));
                           }}
                           value={field.value}
                           type="number"
                           className="w-full bg-inherit border-b border-secondary text-sm focus:outline-none"
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="preference"
               render={({ field }) => (
                  <Select
                     onValueChange={(value: string) => field.onChange(value)}
                  >
                     <SelectTrigger className="bg-inherit border-0 px-0 w-32 focus:ring-0 ml-auto">
                        <FormItem>
                           <FormControl>
                              <SelectValue
                                 placeholder="Preference"
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
         </form>
      </Form>
   );
};

export default EditProfileForm;
