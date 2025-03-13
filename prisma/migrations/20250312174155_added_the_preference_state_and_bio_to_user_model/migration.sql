/*
  Warnings:

  - You are about to drop the column `city` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Preference" AS ENUM ('defender', 'midfielder', 'forward');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "city",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "preference" "Preference" NOT NULL DEFAULT 'forward',
ADD COLUMN     "state" TEXT;
