-- CreateTable
CREATE TABLE "imeiHasGeo" (
    "id" INTEGER NOT NULL,
    "imei" TEXT NOT NULL,
    "kodeWilayah" TEXT NOT NULL,

    CONSTRAINT "imeiHasGeo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "imeiHasGeo_imei_key" ON "imeiHasGeo"("imei");

-- CreateIndex
CREATE UNIQUE INDEX "imeiHasGeo_kodeWilayah_key" ON "imeiHasGeo"("kodeWilayah");
