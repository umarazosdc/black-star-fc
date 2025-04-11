import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your verification code",
      html: `Here is your verification code: <b>${token}</b>`,
    });
  } catch (error) {
    console.error("Failed to send verification email:", error);
    throw new Error("Could not send verification email.");
  }
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const url = `${process.env.AUTH_URL}reset-password?token=${token}`;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href=${url}>here</a> to reset your password.</p>`,
    });
  } catch (error) {
    console.error("Failed to send reset password email:", error);
    throw new Error("Could not send reset password email.");
  }
};
