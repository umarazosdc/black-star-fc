"use server";

import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { cache } from "react";

export const getUserById = cache(async (id: string) => {
  return await db.user.findUnique({ where: { id: id } });
});

export const getUserByEmail = cache(async (email: string) => {
  return await db.user.findUnique({ where: { email: email } });
});

export const getUsers = cache(async () => {
  return await db.user.findMany();
});

export const requestPlayer = async (userId: string, playerId: string) => {
  const existingRequest = await db.request.findFirst({
    where: { playerId, userId },
  });

  if (existingRequest) {
    throw new Error("Player has already been requested");
  }
  return await db.request.create({
    data: {
      playerId,
      userId,
    },
  });
};

export const getRequestedPlayersById = cache(async (userId: string) => {
  return await db.request.findMany({
    where: { userId },
    include: { player: true },
  });
});

export const getBookmarkedPlayersById = cache(async (userId: string) => {
  return await db.bookmark.findMany({
    where: { userId },
    include: { player: true },
  });
});

export const hasUserRequestedPlayer = cache(
  async (userId: string, playerId: string) => {
    const request = await db.request.findFirst({
      where: {
        userId,
        playerId,
      },
    });

    return !!request; // Returns true if a request exists, false otherwise
  }
);

export const requests = cache(async () => {
  return await db.request.findMany({
    where: {
      NOT: [
        {
          user: { role: "admin" },
        },
      ],
    },
    include: {
      user: true,
      player: true,
    },
    orderBy: { updatedAt: "desc" },
  });
});

export const getUsersBySearch = cache(async (search: string) => {
  return db.user.findMany({
    where: {
      OR: [
        { email: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
      ],
      NOT: [{ role: "admin" }],
    },
    take: 15,
  });
});

export const getPlayersBySearch = cache(async (search: string) => {
  return db.player.findMany({
    where: {
      OR: [
        { firstname: { contains: search, mode: "insensitive" } },
        { lastname: { contains: search, mode: "insensitive" } },
      ],
    },
    take: 15,
  });
});

export const getNotificationByUserId = cache(async (userId: string) => {
  return await db.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
});

export const adminOnlyNotification = cache(async () => {
  return await db.notification.findMany({
    where: {
      NOT: {
        title: {},
      },
    },
  });
});

export const getUsersBySearchAndOrder = cache(
  async (search: string, orderBy: Prisma.UserOrderByWithRelationInput) => {
    try {
      return db.user.findMany({
        where: {
          OR: [
            { email: { contains: search, mode: "insensitive" } },
            { name: { contains: search, mode: "insensitive" } },
          ],
          NOT: [{ role: "admin" }],
        },
        take: 15,
        orderBy: orderBy,
      });
    } catch (error) {
      console.log("Failed to fetch user", error);
      throw new Error("Unable to fetch users. Please try again later.");
    }
  }
);

export const getTotalUsers = cache(async () => {
  return await db.user.count({ where: { NOT: [{ role: "admin" }] } });
});

export const suspendUser = cache(async (id: string, days: number) => {
  const daysLater = new Date();
  daysLater.setDate(daysLater.getDate() + days);

  return await db.user.update({
    where: { id },
    data: { isSuspended: true, suspendedUntil: daysLater },
  });
});

export const unSuspendUser = cache(async (id: string) => {
  return await db.user.update({
    where: { id },
    data: { isSuspended: false, suspendedUntil: null },
  });
});

export const getSuspendedUsers = cache(async () => {
  return await db.user.findMany({
    where: { isSuspended: true },
    take: 15,
  });
});

export const isSuspended = cache(async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
    select: { isSuspended: true },
  });
  return user?.isSuspended ?? false;
});

export const getPlayerById = async (id: string) => {
  return await db.player.findUnique({ where: { id: id } });
};

export const getTotalBookmarks = cache(async () => {
  return await db.bookmark.count();
});

export const getScoutTotalBookmarks = cache(async (id: string) => {
  return await db.bookmark.count({ where: { userId: id } });
});

export const getTotalRequests = cache(async () => {
  return await db.request.count();
});

export const getScoutTotalRequests = cache(async (id: string) => {
  return await db.request.count({ where: { userId: id } });
});

export const getTotalPlayers = async () => {
  return await db.player.count();
};

export const getPlayers = cache(async (userId: string) => {
  return await db.player.findMany({
    where: {
      NOT: {
        OR: [
          { bookmarked: { some: { userId } } }, // Exclude bookmarked players
          { requested: { some: { userId } } }, // Exclude requested players
        ],
      },
    },
    orderBy: { createdAt: "asc" },
  });
});

export const getPlayersById = cache(async (id: string) => {
  return await db.player.findMany({ where: { id } });
});

export const getPreUploadedPlayers = async () => {
  return await db.preUploadedPlayer.findMany();
};

export const removePlayerById = cache(async (id: string) => {
  return await db.player.delete({ where: { id } });
});

export const removePreUploadedPlayerById = cache(async (id: string) => {
  return await db.preUploadedPlayer.delete({ where: { id } });
});

export const removeUserById = cache(async (id: string) => {
  return await db.user.delete({ where: { id } });
});

export const getStatsById = cache(async (id: string) => {
  return await db.stats.findUnique({ where: { playerId: id } });
});

export const toggleBookmark = cache(
  async (status: boolean, playerId: string, userId: string) => {
    return await db.bookmark.create({
      data: { playerId, userId, isBookmarked: status },
    });
  }
);

export const getBookmarkStatus = cache(
  async (playerId: string, userId: string) => {
    return db.bookmark.findFirst({ where: { playerId, userId } });
  }
);

export const getBookmarksById = cache(async (userId: string) => {
  return db.bookmark.findFirst({ where: { userId } });
});
