import { MotivoAjuste, StatusAjuste } from 'generated/prisma';
export declare class AjustePontoEntity {
    id: number;
    dateTimestampAjustado: Date;
    motivo: MotivoAjuste;
    status: StatusAjuste;
    usuarioId: number;
    pontoId: number;
}
