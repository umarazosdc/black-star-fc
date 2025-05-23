"use client";
import AuthWrapper from "@/components/auth/auth-card";
import Img from "@/components/utils/image";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/auth/login-form"), {
  ssr: false,
});

const LoginPage = () => {
  return (
    <div className="bg-white flex flex-col gap-6">
      <div className="relative size-16 mt-6 flex justify-center mr-auto ml-auto">
        <Img src="/imgs/logo/logo.jpg" alt="Logo" />
      </div>
      <AuthWrapper isLogin>
        <LoginForm />
      </AuthWrapper>
    </div>
  );
};

export default LoginPage;
