"use client";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TokenVerificationSchema } from "@/lib/schema";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { verify } from "@/lib/validations";
import { toast } from "sonner";

const VerificationForm = () => {
  const searchParam = useSearchParams();
  const email = searchParam.get("email") || "";

  const [isLoading, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof TokenVerificationSchema>>({
    defaultValues: { otp: "" },
    resolver: zodResolver(TokenVerificationSchema),
  });

  const handleOTP = (data: { otp: string }) => {
    startTransition(() => {
      verify(data.otp, email).then((data) => {
        if (data?.error) {
          toast.error(data.error);
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOTP)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="gap-1.5">
                    {Array.from({ length: 6 }, (_, index) => (
                      <InputOTPSlot key={index} index={index} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent hover:opacity-80 text-primary transition-all"
          disabled={isLoading}
        >
          {isLoading ? "Verifying" : "Verify"}
        </Button>
      </form>
    </Form>
  );
};

export default VerificationForm;
