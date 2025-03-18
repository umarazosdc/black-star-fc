/*
  Warnings:

  - A unique constraint covering the columns `[playerId,userId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Bookmark_playerId_key";

-- DropIndex
DROP INDEX "Notification_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_playerId_userId_key" ON "Bookmark"("playerId", "userId");
