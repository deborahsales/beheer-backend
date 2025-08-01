/*
  Warnings:

  - Added the required column `dataInicio` to the `Cronograma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataTermino` to the `Cronograma` table without a default value. This is not possible if the table is not empty.
  - Made the column `descricao` on table `Cronograma` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cronograma" ADD COLUMN     "dataInicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataTermino" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "descricao" SET NOT NULL;
