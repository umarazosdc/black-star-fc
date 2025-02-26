/*
  Warnings:

  - A unique constraint covering the columns `[statsId]` on the table `PreUploadedPlayer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "PreUploadedPlayer" DROP CONSTRAINT "PreUploadedPlayer_statsId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "PreUploadedPlayer_statsId_key" ON "PreUploadedPlayer"("statsId");

-- AddForeignKey
ALTER TABLE "PreUploadedPlayer" ADD CONSTRAINT "PreUploadedPlayer_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "Stats"("id") ON DELETE CASCADE ON UPDATE CASCADE;
