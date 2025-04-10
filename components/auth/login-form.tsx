import { LoginSchema } from "@/lib/schema";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    try {
      const data = await login(values);
      if (data.error) {
        toast.error(data.error);
        setIsLoading(false);
      } else if (data.verifyEmail) {
        toast.info("Please verify your email.");
        router.push(`/verify-email?email=${data.email}`);
      } else if (data.status === "success") {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          callbackUrl: "/",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong.");
      setIsLoading(false);
    }
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
