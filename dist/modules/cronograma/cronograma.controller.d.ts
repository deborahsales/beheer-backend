import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CronogramaService } from './cronograma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
export declare class CronogramaController {
    private cronogramaService;
    constructor(cronogramaService: CronogramaService);
    create(createCronogramaDto: CreateCronogramaDto, req: RequestWithUser): import("generated/prisma").Prisma.Prisma__CronogramaClient<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }[]>;
    findOne(cronogramaId: number, req: RequestWithUser): Promise<{
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
    }>;
    delete(cronogramaId: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }>;
}
