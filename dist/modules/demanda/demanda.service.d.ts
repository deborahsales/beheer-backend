import { PrismaService } from '../prisma/prisma.service';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { FilterDemandasDto } from './dto/filter-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';
export declare class DemandaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateDemandaDto, gestorId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusDemanda;
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }>;
    findAll(usuarioId: number, filters: FilterDemandasDto): Promise<({
        gruposDemanda: {
            demandaId: number;
            grupoId: number;
        }[];
        usuariosDemanda: {
            usuarioId: number;
            demandaId: number;
        }[];
    } & {
        status: import("generated/prisma").$Enums.StatusDemanda;
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    })[]>;
    findAllByGroup(groupId: number, filters: FilterDemandasDto): Promise<{
        status: import("generated/prisma").$Enums.StatusDemanda;
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
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
            conteudo: string;
            demandaId: number;
            dataAlteracao: Date | null;
        }[];
        gruposDemanda: ({
            grupo: {
                nome: string;
            };
        } & {
            demandaId: number;
            grupoId: number;
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
        status: import("generated/prisma").$Enums.StatusDemanda;
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
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
            conteudo: string;
            demandaId: number;
            dataAlteracao: Date | null;
        }[];
        gruposDemanda: ({
            grupo: {
                nome: string;
            };
        } & {
            demandaId: number;
            grupoId: number;
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
        status: import("generated/prisma").$Enums.StatusDemanda;
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }>;
    remove(id: number, gestorId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusDemanda;
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }>;
}
