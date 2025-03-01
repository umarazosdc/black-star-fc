-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_preUploadedPlayerId_fkey";

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_preUploadedPlayerId_fkey" FOREIGN KEY ("preUploadedPlayerId") REFERENCES "PreUploadedPlayer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
