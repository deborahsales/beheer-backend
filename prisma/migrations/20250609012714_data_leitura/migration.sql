/*
  Warnings:

  - You are about to drop the column `dateTimestamp` on the `AvisoUsuario` table. All the data in the column will be lost.
  - Added the required column `dataLeitura` to the `AvisoUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvisoUsuario" DROP COLUMN "dateTimestamp",
ADD COLUMN     "dataLeitura" TIMESTAMP(3) NOT NULL;
