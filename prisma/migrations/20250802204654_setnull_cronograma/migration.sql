-- DropForeignKey
ALTER TABLE "Demanda" DROP CONSTRAINT "Demanda_cronogramaId_fkey";

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_cronogramaId_fkey" FOREIGN KEY ("cronogramaId") REFERENCES "Cronograma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
