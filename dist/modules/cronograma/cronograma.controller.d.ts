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
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }>;
    findAll(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }[]>;
    findOne(cronogramaId: number, req: RequestWithUser): Promise<{
        demandasCronograma: {
            status: import("generated/prisma").$Enums.StatusDemanda;
            id: number;
            dateTimestamp: Date;
            titulo: string;
            descricao: string;
            prazo: Date | null;
            prioridade: import("generated/prisma").$Enums.PrioridadeDemanda;
            cronogramaId: number | null;
            gestorUsuarioId: number;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }>;
    update(cronogramaId: number, updateCronogramaDto: UpdateCronogramaDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    } | null>;
    delete(cronogramaId: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }>;
}
