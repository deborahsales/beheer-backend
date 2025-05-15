/*
  Warnings:

  - A unique constraint covering the columns `[pontoId]` on the table `AjustePonto` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Demanda" DROP CONSTRAINT "Demanda_cronogramaId_fkey";

-- AlterTable
ALTER TABLE "Demanda" ALTER COLUMN "cronogramaId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AjustePonto_pontoId_key" ON "AjustePonto"("pontoId");

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_cronogramaId_fkey" FOREIGN KEY ("cronogramaId") REFERENCES "Cronograma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
