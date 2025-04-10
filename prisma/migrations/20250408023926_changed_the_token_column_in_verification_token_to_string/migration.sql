/*
  Warnings:

  - You are about to drop the `TokenVerification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TokenVerification";

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_email_key" ON "VerificationToken"("token", "email");
