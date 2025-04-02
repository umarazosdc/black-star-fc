"use server";

import { cache } from "react";
import {
  getUserById,
  requestPlayer,
  updateRequestedPlayer,
} from "../database/queries";
import { db } from "../prisma";

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
                <strong>${userName}</strong>, has submitted a request regarding <strong>${playerName}</strong>, a <strong>${playerPosition}</strong> currently in our system.
                They believe this player is ready for the next step and require management’s approval.

                Please review the request and take action as needed. Tap to view details and respond.
              `.trim(),
              userId: admin.id, // Send notification to each admin
              senderId: userId,
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

export const bookmarkPlayer = async (playerId: string, userId: string) => {
  const existingBookmark = await db.bookmark.findUnique({
    where: { playerId_userId: { playerId, userId } },
  });

  if (existingBookmark) {
    // If already bookmarked, unbookmark by deleting
    await db.bookmark.delete({
      where: { playerId_userId: { playerId, userId } },
    });
  } else {
    // If not bookmarked, create a new record
    await db.bookmark.create({
      data: { playerId, userId, isBookmarked: true },
    });
  }
};

export const acceptRequest = async (
  userId: string,
  playerId: string,
  playerName: string
) => {
  try {
    // Check user still exists
    const scout = await getUserById(userId);
    if (!scout) {
      console.log("User does not exist.");
      return;
    }

    // Get Admin
    const adminId = await db.user.findFirst({
      where: { role: "admin" },
      select: { id: true },
    });

    await Promise.all([
      // Update requested player
      updateRequestedPlayer(userId, playerId),

      // Send Notification
      db.notification.create({
        data: {
          title: "✅ Your Scout Request Has Been Accepted – Next Steps!",
          message: `
        Hello <strong>${scout.name}</strong>,  
        
        We've reviewed your request regarding <strong>${playerName}</strong>, and we're pleased to inform you that it has been accepted! 🎉

        Thank you for your keen eye and effort in identifying talent. We appreciate your contributions and look forward to working together to ensure the best opportunities for our players.

        For the next steps and further discussion, kindly reach out to us on WhatsApp: <strong style="color: hsl(9, 75%, 62%);"><a href="https://wa.me/2347053837365" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></strong> 📲

        Looking forward to chatting with you!

        Best regards,  
        <strong>Black Stars Fc</strong>  
        <strong>Management</strong>  
        `.trim(),
          userId,
          senderId: adminId?.id,
        },
      }),
    ]);
  } catch (error) {
    console.log("Could not accept request", error);
  }
};
