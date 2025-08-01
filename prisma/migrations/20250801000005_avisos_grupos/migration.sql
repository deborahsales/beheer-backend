-- CreateTable
CREATE TABLE "GruposAviso" (
    "grupoId" INTEGER NOT NULL,
    "avisoId" INTEGER NOT NULL,

    CONSTRAINT "GruposAviso_pkey" PRIMARY KEY ("grupoId","avisoId")
);

-- AddForeignKey
ALTER TABLE "GruposAviso" ADD CONSTRAINT "GruposAviso_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GruposAviso" ADD CONSTRAINT "GruposAviso_avisoId_fkey" FOREIGN KEY ("avisoId") REFERENCES "Aviso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
