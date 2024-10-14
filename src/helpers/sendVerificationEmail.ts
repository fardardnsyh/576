import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Whisper Link | Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    console.log("Resend API Response:", response);

    return {
      success: true,
      message: "Verification email sent successfully.",
    };
  } catch (emailError) {
    console.error("Error sending verification email:", JSON.stringify(emailError, null, 2));
    return {
      success: false,
      message: "An error occurred while sending the verification email.",
    };
  }
}