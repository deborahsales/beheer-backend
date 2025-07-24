import { PrismaService } from '../prisma/prisma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
export declare class CronogramaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCronogramaDto, gestorId: number): Promise<{
        id: number;
        titulo: string;
        descricao: string | null;
        dateTimestamp: Date;
        gestorUsuarioId: number;
    }>;
    findAll(gestorId: number): import("generated/prisma").Prisma.PrismaPromise<({
        demandasCronograma: {
            id: number;
            titulo: string;
            descricao: string;
            dateTimestamp: Date;
            gestorUsuarioId: number;
            prazo: Date | null;
            status: import("generated/prisma").$Enums.StatusDemanda;
            prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
            cronogramaId: number | null;
        }[];
    } & {
        id: number;
        titulo: string;
        descricao: string | null;
        dateTimestamp: Date;
        gestorUsuarioId: number;
    })[]>;
    findOne(cronogramaId: number, gestorId: number): Promise<{
        demandasCronograma: {
            id: number;
            titulo: string;
            descricao: string;
            dateTimestamp: Date;
            gestorUsuarioId: number;
            prazo: Date | null;
            status: import("generated/prisma").$Enums.StatusDemanda;
            prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
            cronogramaId: number | null;
        }[];
    } & {
        id: number;
        titulo: string;
        descricao: string | null;
        dateTimestamp: Date;
        gestorUsuarioId: number;
    }>;
    update(dto: UpdateCronogramaDto, cronogramaId: number, gestorId: number): Promise<({
        demandasCronograma: {
            id: number;
            titulo: string;
            descricao: string;
            dateTimestamp: Date;
            gestorUsuarioId: number;
            prazo: Date | null;
            status: import("generated/prisma").$Enums.StatusDemanda;
            prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
            cronogramaId: number | null;
        }[];
    } & {
        id: number;
        titulo: string;
        descricao: string | null;
        dateTimestamp: Date;
        gestorUsuarioId: number;
    }) | null>;
    remove(cronogramaId: number, gestorId: number): Promise<{
        id: number;
        titulo: string;
        descricao: string | null;
        dateTimestamp: Date;
        gestorUsuarioId: number;
    }>;
}
