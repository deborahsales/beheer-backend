import { PrioridadeDemanda, StatusDemanda } from 'generated/prisma';
export declare class CreateDemandaDto {
    titulo: string;
    descricao: string;
    prazo?: Date;
    status: StatusDemanda;
    prioridade: PrioridadeDemanda;
    cronogramaId?: number;
    usuariosDemanda?: number[];
    gruposDemanda?: number[];
}
