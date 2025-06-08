import { PrismaService } from '../prisma/prisma.service';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { FilterDemandasDto } from './dto/filter-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';
export declare class DemandaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateDemandaDto, gestorId: number): Promise<{
        id: number;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        dateTimestamp: Date;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }>;
    findAll(usuarioId: number, filters: FilterDemandasDto): Promise<{
        id: number;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        dateTimestamp: Date;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }[]>;
    findOne(id: number, gestorId?: number): Promise<({
        comentariosDemanda: {
            id: number;
            usuarioId: number;
            conteudo: string;
            dateTtimestamp: Date;
            dataAlteracao: Date | null;
            demandaId: number;
        }[];
        gruposDemanda: {
            grupoId: number;
            demandaId: number;
        }[];
        usuariosDemanda: {
            usuarioId: number;
            demandaId: number;
        }[];
    } & {
        id: number;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        dateTimestamp: Date;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }) | null>;
    update(id: number, dto: UpdateDemandaDto, gestorId: number): Promise<({
        comentariosDemanda: {
            id: number;
            usuarioId: number;
            conteudo: string;
            dateTtimestamp: Date;
            dataAlteracao: Date | null;
            demandaId: number;
        }[];
        gruposDemanda: {
            grupoId: number;
            demandaId: number;
        }[];
        usuariosDemanda: {
            usuarioId: number;
            demandaId: number;
        }[];
    } & {
        id: number;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        dateTimestamp: Date;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }) | null>;
    remove(id: number, gestorId: number): Promise<void>;
}
