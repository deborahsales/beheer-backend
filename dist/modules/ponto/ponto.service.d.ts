import { PrismaService } from '../prisma/prisma.service';
import { UpdatePontoDto } from './dto/update-ponto.dto';
export declare class PontoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: any, usuarioId: number, ip: string): import("generated/prisma").Prisma.Prisma__PontoClient<{
        usuario: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        ativo: boolean;
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
        ativo: boolean;
        usuarioId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        ativo: boolean;
        usuarioId: number;
    }>;
}
