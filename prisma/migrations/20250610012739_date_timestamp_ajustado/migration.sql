/*
  Warnings:

  - You are about to drop the column `horario` on the `AjustePonto` table. All the data in the column will be lost.
  - Added the required column `dateTimestampAjustado` to the `AjustePonto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AjustePonto" DROP COLUMN "horario",
ADD COLUMN     "dateTimestampAjustado" TIMESTAMP(3) NOT NULL;
