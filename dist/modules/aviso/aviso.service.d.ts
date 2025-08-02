import { PrismaService } from '../prisma/prisma.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';
export declare class AvisoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAvisoDto, usuarioId: number): Promise<{
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    }>;
    findAll(usuarioId: number): Promise<{
        avisoUsuario: {
            usuarioId: number;
            status: import("generated/prisma").$Enums.StatusAviso;
            dataLeitura: Date;
            avisoId: number;
        }[];
        gestor: {
            id: number;
            nome: string;
        };
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    }[]>;
    findOne(avisoId: number, usuarioId: number): Promise<{
        avisoUsuario: ({
            usuario: {
                nome: string;
                email: string;
            };
        } & {
            usuarioId: number;
            status: import("generated/prisma").$Enums.StatusAviso;
            dataLeitura: Date;
            avisoId: number;
        })[];
        gestor: {
            id: number;
            nome: string;
        };
        gruposAviso: ({
            grupo: {
                nome: string;
            };
        } & {
            grupoId: number;
            avisoId: number;
        })[];
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    }>;
    updateLido(avisoId: number, usuarioId: number): Promise<{
        usuarioId: number;
        status: import("generated/prisma").$Enums.StatusAviso;
        dataLeitura: Date;
        avisoId: number;
    }>;
    update(dto: UpdateAvisoDto, avisoId: number, usuarioId: number): Promise<{
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    } | null>;
    remove(avisoId: number, usuarioId: number): Promise<{
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    }>;
}
