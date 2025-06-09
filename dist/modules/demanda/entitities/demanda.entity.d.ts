import { PrioridadeDemanda, StatusDemanda } from 'generated/prisma';
export declare class DemandaEntity {
    id: number;
    titulo: string;
    descricao: string;
    prazo: Date;
    status: StatusDemanda;
    prioridade: PrioridadeDemanda;
    cronogramaId: number;
    gestorId: number;
}
