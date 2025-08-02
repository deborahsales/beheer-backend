import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { DemandaService } from './demanda.service';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { FilterDemandasDto } from './dto/filter-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';
export declare class DemandaController {
    private demandaService;
    constructor(demandaService: DemandaService);
    create(createDemandaDto: CreateDemandaDto, req: RequestWithUser): Promise<{
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
    findAll(filterDemandasDto: FilterDemandasDto, req: RequestWithUser): Promise<({
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
    findAllByUser(filterDemandasDto: FilterDemandasDto, userId: number): Promise<({
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
    findAllByGroup(filterDemandasDto: FilterDemandasDto, groupId: number): Promise<{
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
    findAllByTimeline(filterDemandasDto: FilterDemandasDto, timelineId: number): Promise<{
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
    findOne(id: number): Promise<{
        cronograma: {
            id: number;
            titulo: string;
            descricao: string;
            dateTimestamp: Date;
            gestorUsuarioId: number;
            dataInicio: Date;
            dataTermino: Date;
        } | null;
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
    update(id: number, updateDemandaDto: UpdateDemandaDto, req: RequestWithUser): Promise<{
        cronograma: {
            id: number;
            titulo: string;
            descricao: string;
            dateTimestamp: Date;
            gestorUsuarioId: number;
            dataInicio: Date;
            dataTermino: Date;
        } | null;
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
    updateStatus(id: number, updateDemandaDto: UpdateDemandaDto, req: RequestWithUser): Promise<{
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
    delete(id: number, req: RequestWithUser): Promise<{
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
