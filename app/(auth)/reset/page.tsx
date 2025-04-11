import PasswordResetEmailForm from "@/components/auth/password-reset-email-form";
import Wrapper from "@/components/auth/wrapper";
import React from "react";

const ResetPage = () => {
  return (
    <Wrapper
      title="Enter your email"
      description="Enter your email to reset your password"
    >
      <PasswordResetEmailForm />
    </Wrapper>
  );
};

export default ResetPage;
