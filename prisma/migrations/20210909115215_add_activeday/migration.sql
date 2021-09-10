-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "routineId" TEXT;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine"("id") ON DELETE SET NULL ON UPDATE CASCADE;
