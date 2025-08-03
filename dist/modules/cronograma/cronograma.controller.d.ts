import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CronogramaService } from './cronograma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
export declare class CronogramaController {
    private cronogramaService;
    constructor(cronogramaService: CronogramaService);
    create(createCronogramaDto: CreateCronogramaDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        descricao: string;
        titulo: string;
        gestorUsuarioId: number;
        dataInicio: Date;
        dataTermino: Date;
    }>;
    findAll(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<({
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
    findOne(cronogramaId: number, req: RequestWithUser): Promise<{
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
    update(cronogramaId: number, updateCronogramaDto: UpdateCronogramaDto, req: RequestWithUser): Promise<({
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
    delete(cronogramaId: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        descricao: string;
        titulo: string;
        gestorUsuarioId: number;
        dataInicio: Date;
        dataTermino: Date;
    }>;
}
