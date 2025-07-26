import { PrismaService } from '../prisma/prisma.service';
import { UpdateGerenciamentoPrestacaoDto } from './dto/update-gerenciamento-prestacao.dto';
import { UpdatePrestacaoContasDto } from './dto/update-prestacao-contas.dto';
export declare class PrestacaoContasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: any, usuarioId: number): import("generated/prisma").Prisma.Prisma__PrestacaoContasClient<{
        usuario: {
            id: number;
            dateTimestamp: Date;
            cpf: string;
            nome: string;
            email: string;
            senha: string;
            telefone: string;
            dataNascimento: Date;
            dataAdmissao: Date;
            dataDesligamento: Date | null;
            cargo: string;
            funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        };
    } & {
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(funcaoUsuario: string, usuarioId: number): any;
    findOne(id: number, funcaoUsuario: string, usuarioId: number): any;
    update(dto: UpdatePrestacaoContasDto, id: number, usuarioId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }>;
    updateRh(dto: UpdateGerenciamentoPrestacaoDto, id: number, usuarioId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }>;
    remove(id: number, usuarioId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }>;
}
