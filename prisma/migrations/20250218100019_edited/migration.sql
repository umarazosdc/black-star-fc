-- AlterTable
ALTER TABLE "PreUploadedPlayer" ADD COLUMN     "statsId" TEXT;

-- AddForeignKey
ALTER TABLE "PreUploadedPlayer" ADD CONSTRAINT "PreUploadedPlayer_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "Stats"("id") ON DELETE SET NULL ON UPDATE CASCADE;
