-- CreateTable
CREATE TABLE "GerenciamentoAtestado" (
    "dateTimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atestadoId" INTEGER NOT NULL,
    "rhUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "GerenciamentoAtestado_pkey" PRIMARY KEY ("atestadoId","rhUsuarioId")
);

-- AddForeignKey
ALTER TABLE "GerenciamentoAtestado" ADD CONSTRAINT "GerenciamentoAtestado_atestadoId_fkey" FOREIGN KEY ("atestadoId") REFERENCES "Atestado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenciamentoAtestado" ADD CONSTRAINT "GerenciamentoAtestado_rhUsuarioId_fkey" FOREIGN KEY ("rhUsuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
