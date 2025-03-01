import { LoginSchema } from '@/lib/schema';
import React from 'react';
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
import Link from 'next/link';
import { login } from '@/lib/validations';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const LoginForm = () => {
   const [isLoading, startTransition] = React.useTransition();
   const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
         email: '',
         password: '',
      },
   });
   const handleLogin = (values: z.infer<typeof LoginSchema>) => {
      startTransition(() => {
         login(values)
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
               <Link
                  href="/auth/reset"
                  className="self-start text-sm text-secondary"
               >
                  Forgot password?
               </Link>
               <Button
                  className="w-full bg-accent text-primary shadow-md hover:bg-accent hover:text-primary font-bold"
                  type="submit"
                  disabled={isLoading}
               >
                  Login
               </Button>
            </div>
         </form>
      </Form>
   );
};

export default LoginForm;
