import { Demanda } from 'generated/prisma';
export declare class CronogramaEntity {
    id: number;
    titulo: string;
    descricao: string;
    dataInicio: string;
    dataTermino: string;
    gestorUsuarioId: number;
    demandasCronograma: Demanda[];
}
