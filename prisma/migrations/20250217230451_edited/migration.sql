/*
  Warnings:

  - You are about to drop the column `nationality` on the `PreUploadedPlayer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PreUploadedPlayer" DROP COLUMN "nationality",
ADD COLUMN     "thumbnail" TEXT,
ALTER COLUMN "firsname" DROP NOT NULL,
ALTER COLUMN "lastname" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "side" DROP NOT NULL,
ALTER COLUMN "position" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "dob" DROP NOT NULL;
