import { PrismaService } from '../prisma/prisma.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';
export declare class AvisoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAvisoDto, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    }>;
    findAll(usuarioId: number): import("generated/prisma").Prisma.PrismaPromise<({
        avisoUsuario: {
            status: import("generated/prisma").$Enums.StatusAviso;
            usuarioId: number;
            dataLeitura: Date;
            avisoId: number;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    })[]>;
    findOne(avisoId: number, usuarioId: number): Promise<{
        avisoUsuario: {
            status: import("generated/prisma").$Enums.StatusAviso;
            usuarioId: number;
            dataLeitura: Date;
            avisoId: number;
        }[];
    } & {
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    }>;
    updateLido(avisoId: number, usuarioId: number): Promise<{
        status: import("generated/prisma").$Enums.StatusAviso;
        usuarioId: number;
        dataLeitura: Date;
        avisoId: number;
    }>;
    update(dto: UpdateAvisoDto, avisoId: number, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    } | null>;
    remove(avisoId: number, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    }>;
}
