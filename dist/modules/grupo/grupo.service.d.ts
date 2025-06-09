import { PrismaService } from '../prisma/prisma.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
export declare class GrupoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateGrupoDto, gestorId: number): Promise<{
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
    } & {
        nome: string;
        id: number;
        descricao: string;
    }>;
    findAll(usuarioId: number): import("generated/prisma").Prisma.PrismaPromise<({
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
    } & {
        nome: string;
        id: number;
        descricao: string;
    })[]>;
    findOne(id: number, gestorId?: number): Promise<{
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
    } & {
        nome: string;
        id: number;
        descricao: string;
    }>;
    update(id: number, dto: UpdateGrupoDto, gestorId: number): Promise<{
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
    } & {
        nome: string;
        id: number;
        descricao: string;
    }>;
    remove(id: number, gestorId: number): Promise<{
        nome: string;
        id: number;
        descricao: string;
    }>;
}
