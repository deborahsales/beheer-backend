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
    findAll(usuarioId: number, filters: FilterDemandasDto): Promise<({
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
    })[]>;
    findAllByGroup(groupId: number, filters: FilterDemandasDto): Promise<{
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
    findOne(id: number, gestorId?: number): Promise<{
        gestor: {
            nome: string;
        };
        comentariosDemanda: {
            id: number;
            dateTimestamp: Date;
            usuarioId: number;
            demandaId: number;
            conteudo: string;
            dataAlteracao: Date | null;
        }[];
        gruposDemanda: ({
            grupo: {
                nome: string;
            };
        } & {
            grupoId: number;
            demandaId: number;
        })[];
        usuariosDemanda: ({
            usuario: {
                nome: string;
            };
        } & {
            usuarioId: number;
            demandaId: number;
        })[];
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
    }>;
    update(id: number, dto: UpdateDemandaDto, gestorId: number): Promise<{
        gestor: {
            nome: string;
        };
        comentariosDemanda: {
            id: number;
            dateTimestamp: Date;
            usuarioId: number;
            demandaId: number;
            conteudo: string;
            dataAlteracao: Date | null;
        }[];
        gruposDemanda: ({
            grupo: {
                nome: string;
            };
        } & {
            grupoId: number;
            demandaId: number;
        })[];
        usuariosDemanda: ({
            usuario: {
                nome: string;
            };
        } & {
            usuarioId: number;
            demandaId: number;
        })[];
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
    }>;
    remove(id: number, gestorId: number): Promise<{
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
}
