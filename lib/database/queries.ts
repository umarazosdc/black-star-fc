'use server';

import { db } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const getUserById = async (id: string) => {
   return await db.user.findUnique({ where: { id: id } });
};

export const getUserByEmail = async (email: string) => {
   return await db.user.findUnique({ where: { email: email } });
};

export const getUsers = async () => {
   return await db.user.findMany();
};

export const getUserBySearch = async (
   search: string,
   orderBy: Prisma.UserOrderByWithRelationInput
) => {
   try {
      return db.user.findMany({
         where: {
            OR: [
               { email: { contains: search, mode: 'insensitive' } },
               { name: { contains: search, mode: 'insensitive' } },
            ],
            NOT: [{ role: 'admin' }],
         },
         take: 15,
         orderBy: orderBy,
      });
   } catch (error) {
      console.log('Failed to fetch user', error);
      throw new Error('Unable to fetch users. Please try again later.');
   }
};

export const getTotalUsers = async () => {
   return await db.user.count({ where: { NOT: [{ role: 'admin' }] } });
};

export const getPlayerById = async (id: string) => {
   return await db.player.findUnique({ where: { id: id } });
};

export const getTotalBookmarks = async () => {
   return await db.bookmark.count();
};

export const getTotalRequests = async () => {
   return await db.request.count();
};

export const getTotalPlayers = async () => {
   return await db.player.count();
};

export const getPlayers = async () => {
   return await db.player.findMany();
};

export const getPlayersById = async (id: string) => {
   return await db.player.findMany({ where: { id } });
};

export const getPreUploadedPlayers = async () => {
   return await db.preUploadedPlayer.findMany();
};

export const removePlayerById = async (id: string) => {
   return await db.player.delete({ where: { id } });
};

export const removePreUploadedPlayerById = async (id: string) => {
   return await db.preUploadedPlayer.delete({ where: { id } });
};

export const removeUserById = async (id: string) => {
   return await db.user.delete({ where: { id } });
};

export const getStatsById = async (id: string) => {
   return await db.stats.findUnique({ where: { id } });
};

export const toggleBookmark = async (
   status: boolean,
   playerId: string,
   userId: string
) => {
   return await db.bookmark.create({
      data: { playerId, userId, isBookmarked: status },
   });
};

export const getBookmarkStatus = async (playerId: string, userId: string) => {
   return db.bookmark.findFirst({ where: { playerId, userId } });
};

export const getBookmarksById = async (userId: string) => {
   return db.bookmark.findFirst({ where: { userId } });
};
