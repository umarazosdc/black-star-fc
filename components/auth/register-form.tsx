'use client';
import { RegisterSchema } from '@/lib/schema';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
   Form,
   FormField,
   FormControl,
   FormItem,
   FormMessage,
   FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { register } from '@/lib/validations';
import { toast } from 'sonner';

const RegisterForm = () => {
   const [isLoading, startTransition] = React.useTransition();
   const form = useForm<z.infer<typeof RegisterSchema>>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         firstname: '',
         lastname: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
   });
   const handleLogin = (values: z.infer<typeof RegisterSchema>) => {
      startTransition(() => {
         register(values)
            .then((data) => {
               if (data.error) {
                  toast.error(data.error);
               } else {
                  toast.success(data.success);
               }
            })
            .catch(() => {
               toast.error('Something went wrong.');
            });
      });
   };
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(handleLogin)}>
            <div className="space-y-4 flex flex-col">
               <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Firstname</FormLabel>
                        <FormControl>
                           <Input
                              {...field}
                              placeholder="Isa"
                              type="text"
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
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                           <Input
                              {...field}
                              placeholder="Umar"
                              type="text"
                              className="text-sm"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input
                              {...field}
                              placeholder="malamisa360@gmail.com"
                              type="email"
                              className="text-sm"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                           <Input
                              {...field}
                              placeholder="********"
                              type="password"
                              className="text-sm"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                           <Input
                              {...field}
                              placeholder="********"
                              type="password"
                              className="text-sm"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button
                  className="w-full bg-accent text-primary shadow-md hover:bg-accent hover:text-primary font-bold"
                  type="submit"
                  disabled={isLoading}
               >
                  Create an account
               </Button>
            </div>
         </form>
      </Form>
   );
};

export default RegisterForm;
