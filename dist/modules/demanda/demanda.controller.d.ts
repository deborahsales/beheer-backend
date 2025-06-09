import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { DemandaService } from './demanda.service';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { FilterDemandasDto } from './dto/filter-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';
export declare class DemandaController {
    private demandaService;
    constructor(demandaService: DemandaService);
    create(createDemandaDto: CreateDemandaDto, req: RequestWithUser): import("generated/prisma").Prisma.Prisma__DemandaClient<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string;
        prazo: Date | null;
        status: import("generated/prisma").$Enums.StatusDemanda;
        prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
        cronogramaId: number | null;
        gestorUsuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(filterDemandasDto: FilterDemandasDto, req: RequestWithUser): Promise<({
        usuariosDemanda: {
            usuarioId: number;
            demandaId: number;
        }[];
        gruposDemanda: {
            grupoId: number;
            demandaId: number;
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
    })[]>;
    findOne(id: number): Promise<{
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
            dateTimestamp: Date;
            usuarioId: number;
            demandaId: number;
            conteudo: string;
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
    }>;
    update(id: number, updateDemandaDto: UpdateDemandaDto, req: RequestWithUser): Promise<{
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
            dateTimestamp: Date;
            usuarioId: number;
            demandaId: number;
            conteudo: string;
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
    }>;
    delete(id: number, req: RequestWithUser): Promise<{
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
}
