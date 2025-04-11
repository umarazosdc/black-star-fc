"use client";
import { PasswordVerificationSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { resetPassword } from "@/lib/validations";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PasswordResetPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof PasswordVerificationSchema>>({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(PasswordVerificationSchema),
  });

  const handleEmailVerification = async (
    value: z.infer<typeof PasswordVerificationSchema>
  ) => {
    try {
      setIsLoading(true);
      const res = await resetPassword(value, token);
      if (res.error) {
        toast.error(res.error);
        return;
      } else if (res.status === "success") {
        toast.success("Password reset successfully");

        router.push("/login");
        return;
      }
      toast.error("Something went wrong while resetting the password");
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter new password"
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
          {isLoading ? "Reseting password..." : "Reset Password"}
        </Button>
      </form>
    </Form>
  );
};

export default PasswordResetPasswordForm;
