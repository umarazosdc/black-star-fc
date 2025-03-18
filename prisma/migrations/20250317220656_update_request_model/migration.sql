/*
  Warnings:

  - A unique constraint covering the columns `[playerId,userId]` on the table `Request` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Request_playerId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Request_playerId_userId_key" ON "Request"("playerId", "userId");
