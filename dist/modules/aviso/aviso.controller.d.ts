import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { AvisoService } from './aviso.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';
export declare class AvisoController {
    private avisoService;
    constructor(avisoService: AvisoService);
    create(createAvisoDto: CreateAvisoDto, req: RequestWithUser): Promise<{
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    }>;
    findAll(req: RequestWithUser): Promise<{
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
    findOne(avisoId: number, req: RequestWithUser): Promise<{
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
    updateLido(avisoId: number, req: RequestWithUser): Promise<{
        usuarioId: number;
        status: import("generated/prisma").$Enums.StatusAviso;
        dataLeitura: Date;
        avisoId: number;
    }>;
    update(avisoId: number, updateAvisoDto: UpdateAvisoDto, req: RequestWithUser): Promise<{
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    } | null>;
    delete(avisoId: number, req: RequestWithUser): Promise<{
        id: number;
        assunto: string;
        conteudo: string;
        dateTimestamp: Date;
        gestorRhUsuarioId: number;
    }>;
}
