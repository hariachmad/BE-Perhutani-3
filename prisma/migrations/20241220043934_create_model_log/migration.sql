-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "event" TEXT NOT NULL,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);
