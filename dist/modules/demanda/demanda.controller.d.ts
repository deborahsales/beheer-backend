import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { DemandaService } from './demanda.service';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';
export declare class DemandaController {
    private demandaService;
    constructor(demandaService: DemandaService);
    create(createDemandaDto: CreateDemandaDto, req: RequestWithUser): Promise<{
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
    findAll(req: RequestWithUser): Promise<{
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
    findOne(id: number): Promise<({
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
    update(id: number, updateDemandaDto: UpdateDemandaDto, req: RequestWithUser): Promise<({
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
    delete(id: number, req: RequestWithUser): Promise<void>;
}
