/*
  Warnings:

  - Made the column `message` on table `Notification` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "message" SET NOT NULL;
