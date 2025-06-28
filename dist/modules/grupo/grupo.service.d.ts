import { PrismaService } from '../prisma/prisma.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
export declare class GrupoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateGrupoDto, gestorId: number): Promise<{
        gestores: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
        usuarios: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
    } & {
        id: number;
        nome: string;
        descricao: string;
    }>;
    findAll(usuarioId: number): import("generated/prisma").Prisma.PrismaPromise<({
        gestores: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
        usuarios: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
    } & {
        id: number;
        nome: string;
        descricao: string;
    })[]>;
    findOne(id: number, gestorId?: number): Promise<{
        gestores: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
        usuarios: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
    } & {
        id: number;
        nome: string;
        descricao: string;
    }>;
    update(id: number, dto: UpdateGrupoDto, gestorId: number): Promise<{
        gestores: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
        usuarios: ({
            usuario: {
                nome: string;
                email: string;
                cargo: string;
            };
        } & {
            usuarioId: number;
            grupoId: number;
        })[];
    } & {
        id: number;
        nome: string;
        descricao: string;
    }>;
    remove(id: number, gestorId: number): Promise<{
        id: number;
        nome: string;
        descricao: string;
    }>;
}
