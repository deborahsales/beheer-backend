import { PrismaService } from '../prisma/prisma.service';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';
export declare class PontoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePontoDto, usuarioId: number, ip: string): import("generated/prisma").Prisma.Prisma__PontoClient<{
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        usuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(funcaoUsuario: string, usuarioId: number): Promise<any>;
    findOne(id: number, funcaoUsuario: string, usuarioId: number): Promise<any>;
    update(dto: UpdatePontoDto, id: number): Promise<{
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        usuarioId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        usuarioId: number;
    }>;
}
