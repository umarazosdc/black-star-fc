-- CreateTable
CREATE TABLE "PreUploadedPlayer" (
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

    CONSTRAINT "PreUploadedPlayer_pkey" PRIMARY KEY ("id")
);
