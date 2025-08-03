import { PrismaService } from '../prisma/prisma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
export declare class CronogramaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCronogramaDto, gestorId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        descricao: string;
        titulo: string;
        gestorUsuarioId: number;
        dataInicio: Date;
        dataTermino: Date;
    }>;
    findAll(gestorId: number): import("generated/prisma").Prisma.PrismaPromise<({
        demandasCronograma: {
            status: import("generated/prisma").$Enums.StatusDemanda;
            id: number;
            dateTimestamp: Date;
            descricao: string;
            titulo: string;
            prazo: Date | null;
            prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
            cronogramaId: number | null;
            gestorUsuarioId: number;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        descricao: string;
        titulo: string;
        gestorUsuarioId: number;
        dataInicio: Date;
        dataTermino: Date;
    })[]>;
    findOne(cronogramaId: number, gestorId: number): Promise<{
        demandasCronograma: {
            status: import("generated/prisma").$Enums.StatusDemanda;
            id: number;
            dateTimestamp: Date;
            descricao: string;
            titulo: string;
            prazo: Date | null;
            prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
            cronogramaId: number | null;
            gestorUsuarioId: number;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        descricao: string;
        titulo: string;
        gestorUsuarioId: number;
        dataInicio: Date;
        dataTermino: Date;
    }>;
    update(dto: UpdateCronogramaDto, cronogramaId: number, gestorId: number): Promise<({
        demandasCronograma: {
            status: import("generated/prisma").$Enums.StatusDemanda;
            id: number;
            dateTimestamp: Date;
            descricao: string;
            titulo: string;
            prazo: Date | null;
            prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
            cronogramaId: number | null;
            gestorUsuarioId: number;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        descricao: string;
        titulo: string;
        gestorUsuarioId: number;
        dataInicio: Date;
        dataTermino: Date;
    }) | null>;
    remove(cronogramaId: number, gestorId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        descricao: string;
        titulo: string;
        gestorUsuarioId: number;
        dataInicio: Date;
        dataTermino: Date;
    }>;
}
