import { PrismaService } from '../prisma/prisma.service';
import { CreateAtestadoDto } from './dto/create-atestado.dto';
import { UpdateAtestadoDto } from './dto/update-atestado.dto';
import { UpdateGerenciamentoAtestadoDto } from './dto/update-gerenciamento-atestado';
export declare class AtestadoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAtestadoDto, usuarioId: number): import("generated/prisma").Prisma.Prisma__AtestadoClient<{
        id: number;
        dateTimestamp: Date;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
        imagem: string;
        status: import("generated/prisma").$Enums.StatusAtestado;
        usuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(funcaoUsuario: string, usuarioId: number): any;
    findOne(id: number, funcaoUsuario: string, usuarioId: number): any;
    update(dto: UpdateAtestadoDto, id: number, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
        imagem: string;
        status: import("generated/prisma").$Enums.StatusAtestado;
        usuarioId: number;
    }>;
    updateRh(dto: UpdateGerenciamentoAtestadoDto, id: number, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
        imagem: string;
        status: import("generated/prisma").$Enums.StatusAtestado;
        usuarioId: number;
    }>;
    remove(id: number, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
        imagem: string;
        status: import("generated/prisma").$Enums.StatusAtestado;
        usuarioId: number;
    }>;
}
