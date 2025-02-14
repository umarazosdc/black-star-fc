'use server';

import { db } from '@/lib/prisma';

export const getUserById = async (id: string) => {
   return await db.user.findUnique({ where: { id: id } });
};

export const getUserByEmail = async (email: string) => {
   return await db.user.findUnique({ where: { email: email } });
};

export const getUsers = async () => {
   return await db.user.findMany();
};

export const getTotalUsers = async () => {
   return await db.user.count();
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
