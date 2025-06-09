import { Demanda } from 'generated/prisma';
export declare class CronogramaEntity {
    id: number;
    titulo: string;
    descricao: string;
    gestorUsuarioId: number;
    demandasCronograma: Demanda[];
}
