/*
  Warnings:

  - You are about to drop the column `firsname` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `firsname` on the `PreUploadedPlayer` table. All the data in the column will be lost.
  - You are about to drop the column `statsId` on the `PreUploadedPlayer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[preUploadedPlayerId]` on the table `Stats` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstname` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `PreUploadedPlayer` table without a default value. This is not possible if the table is not empty.
  - Made the column `lastname` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `age` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `side` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `height` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dob` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `thumbnail` on table `PreUploadedPlayer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `preUploadedPlayerId` to the `Stats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PreUploadedPlayer" DROP CONSTRAINT "PreUploadedPlayer_statsId_fkey";

-- DropIndex
DROP INDEX "PreUploadedPlayer_statsId_key";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "firsname",
ADD COLUMN     "firstname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PreUploadedPlayer" DROP COLUMN "firsname",
DROP COLUMN "statsId",
ADD COLUMN     "firstname" TEXT NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "side" SET NOT NULL,
ALTER COLUMN "position" SET NOT NULL,
ALTER COLUMN "height" SET NOT NULL,
ALTER COLUMN "weight" SET NOT NULL,
ALTER COLUMN "dob" SET NOT NULL,
ALTER COLUMN "thumbnail" SET NOT NULL;

-- AlterTable
ALTER TABLE "Stats" ADD COLUMN     "preUploadedPlayerId" TEXT NOT NULL,
ALTER COLUMN "playerId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stats_preUploadedPlayerId_key" ON "Stats"("preUploadedPlayerId");

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_preUploadedPlayerId_fkey" FOREIGN KEY ("preUploadedPlayerId") REFERENCES "PreUploadedPlayer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
