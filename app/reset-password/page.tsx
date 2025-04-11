import PasswordResetPasswordForm from "@/components/auth/password-reset-password-form";
import Wrapper from "@/components/auth/wrapper";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) => {
  const params = await searchParams;
  const { token } = params;

  if (!token) {
    return (
      <Wrapper title="Reset Password" description="Reset your password">
        <div className="flex flex-col items-center justify-center w-full h-full text-center">
          <h1 className="text-2xl font-bold">Invalid Token</h1>
          <p className="text-sm">Please provide a valid token to reset your password.</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper title="Reset Password" description="Reset your password">
      <PasswordResetPasswordForm token={token as string} />
    </Wrapper>
  );
};

export default Page;
