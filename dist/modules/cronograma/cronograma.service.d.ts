import { PrismaService } from '../prisma/prisma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
export declare class CronogramaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCronogramaDto, gestorId: number): import("generated/prisma").Prisma.Prisma__CronogramaClient<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(gestorId: number): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }[]>;
    findOne(cronogramaId: number, gestorId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }>;
    update(dto: UpdateCronogramaDto, cronogramaId: number, gestorId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }>;
    remove(cronogramaId: number, gestorId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        titulo: string;
        descricao: string | null;
        gestorUsuarioId: number;
    }>;
}
