-- CreateEnum
CREATE TYPE "activeDay" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'SaturDay', 'Sunday');

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "activeDays" "activeDay"[];
