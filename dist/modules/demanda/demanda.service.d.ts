import { PrismaService } from '../prisma/prisma.service';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';
export declare class DemandaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateDemandaDto, gestorId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }>;
    findAll(usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }[]>;
    findOne(id: number, gestorId?: number): Promise<({
        usuariosDemanda: {
            usuarioId: number;
            demandaId: number;
        }[];
        gruposDemanda: {
            grupoId: number;
            demandaId: number;
        }[];
        comentariosDemanda: {
            id: number;
            usuarioId: number;
            demandaId: number;
            conteudo: string;
            dateTtimestamp: Date;
            dataAlteracao: Date | null;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }) | null>;
    update(id: number, dto: UpdateDemandaDto, gestorId: number): Promise<({
        usuariosDemanda: {
            usuarioId: number;
            demandaId: number;
        }[];
        gruposDemanda: {
            grupoId: number;
            demandaId: number;
        }[];
        comentariosDemanda: {
            id: number;
            usuarioId: number;
            demandaId: number;
            conteudo: string;
            dateTtimestamp: Date;
            dataAlteracao: Date | null;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }) | null>;
    remove(id: number, gestorId: number): Promise<void>;
}
