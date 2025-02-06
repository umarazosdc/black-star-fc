-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('scout', 'admin');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "city" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isOnboardingPassed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "phone" INTEGER,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'scout';

-- CreateTable
CREATE TABLE "Stats" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "dribble" INTEGER NOT NULL,
    "pass" INTEGER NOT NULL,
    "pace" INTEGER NOT NULL,
    "defence" INTEGER NOT NULL,
    "shot" INTEGER NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "firsname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "videos" TEXT[],
    "side" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "dob" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" TEXT NOT NULL,
    "isBookmarked" BOOLEAN NOT NULL DEFAULT false,
    "playerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL,
    "isRequested" BOOLEAN NOT NULL DEFAULT false,
    "playerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stats_playerId_key" ON "Stats"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_playerId_key" ON "Bookmark"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Request_playerId_key" ON "Request"("playerId");

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
