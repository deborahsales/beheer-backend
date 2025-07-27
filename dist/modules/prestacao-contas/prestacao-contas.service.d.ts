import { PrismaService } from '../prisma/prisma.service';
import { UpdateGerenciamentoPrestacaoDto } from './dto/update-gerenciamento-prestacao.dto';
import { UpdatePrestacaoContasDto } from './dto/update-prestacao-contas.dto';
export declare class PrestacaoContasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: any, usuarioId: number): import("generated/prisma").Prisma.Prisma__PrestacaoContasClient<{
        usuario: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(funcaoUsuario: string, usuarioId: number): any;
    findOne(id: number, funcaoUsuario: string, usuarioId: number): any;
    update(dto: UpdatePrestacaoContasDto, id: number, usuarioId: number): Promise<{
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }>;
    updateRh(dto: UpdateGerenciamentoPrestacaoDto, id: number, usuarioId: number): Promise<{
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }>;
    remove(id: number, usuarioId: number): Promise<{
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }>;
}
