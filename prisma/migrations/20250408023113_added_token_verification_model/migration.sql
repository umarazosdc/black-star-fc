-- CreateTable
CREATE TABLE "TokenVerification" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TokenVerification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TokenVerification_token_key" ON "TokenVerification"("token");

-- CreateIndex
CREATE UNIQUE INDEX "TokenVerification_token_email_key" ON "TokenVerification"("token", "email");
