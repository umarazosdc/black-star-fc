"use server";

import { signIn } from "@/auth";
import { db } from "./prisma";
import { Resend } from "resend";
import { cache } from "react";
import { requestPlayer } from "./database/queries";

export const providerSignIn = async (provider: string) => {
  await signIn(provider, { redirectTo: "/scout/dashboard" });
};

const resend = new Resend(process.env.RESEND_API_KEY);
export async function updateIsRequested(
  playerId: string,
  userId: string,
  email: string,
  name: string
) {
  // Use Resend to send scout an email
  try {
    const whatsappLink = "https://wa.me/2347053837365";

    const response = await resend.emails.send({
      from: "Black Stars FC <noreply@blackstarsfc.com>",
      to: email,
      subject: "Your Request Has Been Accepted – Next Steps",
      html: `
            <p>Dear ${name},</p>
            <p>Great news! Your request has been <strong>accepted</strong> by our management team. We're excited to move forward with you.</p>
            <p>To proceed, please connect with our management directly on WhatsApp:</p>
            <p><a href="${whatsappLink}" target="_blank" style="background-color:#25D366; color:white; padding:10px 15px; text-decoration:none; border-radius:5px; display:inline-block;">Chat on WhatsApp</a></p>
            <p>If you have any questions, feel free to reach out.</p>
            <p>Best regards,</p>
            <p><strong>Black Stars FC</strong> Team</p>
         `,
    });
    if (response.data?.id) {
      return await db.request.update({
        where: { playerId_userId: { playerId, userId } },
        data: {
          isRequested: true,
        },
      });
    } else {
      throw new Error("Email failed to send");
    }
  } catch (error) {
    console.error("Failed to accept scout request", error);
    throw new Error("Failed to accept scout request");
  }
}

// Send Admin notification of request
export const sendRequest = cache(
  async (
    playerId: string,
    playerName: string,
    playerPosition: string,
    userId: string,
    userName: string
  ) => {
    try {
      // Find admin users
      const admins = await db.user.findMany({
        where: { role: "admin" },
        select: { id: true },
      });

      if (!admins.length) {
        throw new Error("No admin users found");
      }

      await Promise.all([
        ...admins.map((admin) =>
          db.notification.create({
            data: {
              title: `📢 Scout Request for Player Approval: ${playerName}`,
              message: `
                Scout ${userName} has submitted a request regarding ${playerName}, a ${playerPosition} currently in our system.
                They believe this player is ready for the next step and require management’s approval.

                Please review the request and take action as needed. Tap to view details and respond.
              `.trim(),
              userId: admin.id, // Send notification to each admin
            },
          })
        ),
        requestPlayer(userId, playerId),
      ]);
    } catch (error) {
      console.error("Error in sendRequest:", error);
    }
  }
);
