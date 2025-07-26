import { PrismaService } from '../prisma/prisma.service';
import { UpdateAtestadoDto } from './dto/update-atestado.dto';
import { UpdateGerenciamentoAtestadoDto } from './dto/update-gerenciamento-atestado';
export declare class AtestadoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: any, usuarioId: number): import("generated/prisma").Prisma.Prisma__AtestadoClient<{
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
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(funcaoUsuario: string, usuarioId: number): any;
    findOne(id: number, funcaoUsuario: string, usuarioId: number): any;
    update(dto: UpdateAtestadoDto, id: number, usuarioId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }>;
    updateRh(dto: UpdateGerenciamentoAtestadoDto, id: number, usuarioId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }>;
    remove(id: number, usuarioId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }>;
}
