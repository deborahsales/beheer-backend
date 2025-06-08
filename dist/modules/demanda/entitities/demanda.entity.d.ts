import { PrioridadeDemanda, StatusDemanda } from 'generated/prisma';
export declare class DemandaEntity {
    id: string;
    titulo: string;
    descricao: string;
    prazo: Date;
    status: StatusDemanda;
    prioridade: PrioridadeDemanda;
    cronogramaId: string;
    gestorId: string;
}
