import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { GrupoService } from './grupo.service';
export declare class GrupoController {
    private readonly grupoService;
    constructor(grupoService: GrupoService);
    create(createGrupoDto: CreateGrupoDto, req: RequestWithUser): Promise<{
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
        id: number;
        nome: string;
        descricao: string;
    }>;
    findAll(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<({
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
        id: number;
        nome: string;
        descricao: string;
    })[]>;
    findOne(id: number): Promise<{
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
        id: number;
        nome: string;
        descricao: string;
    }>;
    update(id: number, updateGrupoDto: UpdateGrupoDto, req: RequestWithUser): Promise<{
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
        id: number;
        nome: string;
        descricao: string;
    }>;
    delete(id: number, req: RequestWithUser): Promise<{
        id: number;
        nome: string;
        descricao: string;
    }>;
}
