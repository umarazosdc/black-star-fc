"use client";
import AuthCard from "@/components/auth/auth-card";
import { ChevronLeftIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterForm = dynamic(() => import("@/components/auth/register-form"), {
  ssr: false,
});

const RegisterPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 bg-white pt-4">
      <div className="flex items-center ml-4 gap-4">
        <ChevronLeftIcon
          className="size-[23px] cursor-pointer"
          onClick={() => router.back()}
        />
        <span className="font-bold text-secondary text-sm">Sign Up</span>
      </div>
      <AuthCard>
        <RegisterForm />
      </AuthCard>
    </div>
  );
};

export default RegisterPage;
