"use client";
import { EmailVerificationSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { verifyEmail } from "@/lib/validations";
import { toast } from "sonner";

const PasswordResetEmailForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof EmailVerificationSchema>>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(EmailVerificationSchema),
  });

  const handleEmailVerification = async (
    value: z.infer<typeof EmailVerificationSchema>
  ) => {
    try {
      setIsLoading(true);
      const res = await verifyEmail(value);

      if (res.error) {
        toast.error(res.error);
      } else if (res.status === "success") {
        toast.success("Email sent successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while sending the email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={form.handleSubmit(handleEmailVerification)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  className="text-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent hover:opacity-80 text-primary transition-all"
          disabled={isLoading}
        >
          Send reset email
        </Button>
      </form>
    </Form>
  );
};

export default PasswordResetEmailForm;
