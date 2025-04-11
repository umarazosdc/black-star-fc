"use client";
import Wrapper from "@/components/auth/wrapper";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the wrapper component to avoid SSR issues
const VerificationForm = dynamic(
  () => import("@/components/auth/verification-form"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <Wrapper
      title="Verify your email"
      description="We have sent a verification code to your email. Please enter the code below to verify your email address."
    >
      <VerificationForm />
    </Wrapper>
  );
};

export default Page;
