/*
  Warnings:

  - You are about to drop the column `dateTtimestamp` on the `Comentario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comentario" DROP COLUMN "dateTtimestamp",
ADD COLUMN     "dateTimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
