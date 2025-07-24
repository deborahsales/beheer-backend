import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CronogramaService } from './cronograma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
export declare class CronogramaController {
    private cronogramaService;
    constructor(cronogramaService: CronogramaService);
    create(createCronogramaDto: CreateCronogramaDto, req: RequestWithUser): Promise<{
        id: number;
        titulo: string;
        descricao: string | null;
        dateTimestamp: Date;
        gestorUsuarioId: number;
    }>;
    findAll(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<({
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
    findOne(cronogramaId: number, req: RequestWithUser): Promise<{
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
    update(cronogramaId: number, updateCronogramaDto: UpdateCronogramaDto, req: RequestWithUser): Promise<({
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
    delete(cronogramaId: number, req: RequestWithUser): Promise<{
        id: number;
        titulo: string;
        descricao: string | null;
        dateTimestamp: Date;
        gestorUsuarioId: number;
    }>;
}
