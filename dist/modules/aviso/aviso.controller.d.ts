import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { AvisoService } from './aviso.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';
export declare class AvisoController {
    private avisoService;
    constructor(avisoService: AvisoService);
    create(createAvisoDto: CreateAvisoDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    }>;
    findAll(req: RequestWithUser): Promise<{
        avisoUsuario: {
            status: import("generated/prisma").$Enums.StatusAviso;
            usuarioId: number;
            dataLeitura: Date;
            avisoId: number;
        }[];
        gestor: {
            id: number;
            nome: string;
        };
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    }[]>;
    findOne(avisoId: number, req: RequestWithUser): Promise<{
        avisoUsuario: ({
            usuario: {
                nome: string;
                email: string;
            };
        } & {
            status: import("generated/prisma").$Enums.StatusAviso;
            usuarioId: number;
            dataLeitura: Date;
            avisoId: number;
        })[];
        gruposAviso: ({
            grupo: {
                nome: string;
            };
        } & {
            grupoId: number;
            avisoId: number;
        })[];
        gestor: {
            id: number;
            nome: string;
        };
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    }>;
    updateLido(avisoId: number, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusAviso;
        usuarioId: number;
        dataLeitura: Date;
        avisoId: number;
    }>;
    update(avisoId: number, updateAvisoDto: UpdateAvisoDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    } | null>;
    delete(avisoId: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        assunto: string;
        conteudo: string;
        gestorRhUsuarioId: number;
    }>;
}
