/*
  Warnings:

  - Changed the type of `startTime` on the `TimeSlot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `TimeSlot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TimeSlot" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "TimeSlot_date_startTime_endTime_idx" ON "TimeSlot"("date", "startTime", "endTime");

-- CreateIndex
CREATE UNIQUE INDEX "TimeSlot_masterId_date_startTime_endTime_key" ON "TimeSlot"("masterId", "date", "startTime", "endTime");
