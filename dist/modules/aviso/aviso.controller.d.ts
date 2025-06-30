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
            status: import("generated/prisma").$Enums.StatusAviso;
            dataLeitura: Date;
            usuarioId: number;
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
        avisoUsuario: {
            status: import("generated/prisma").$Enums.StatusAviso;
            dataLeitura: Date;
            usuarioId: number;
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
    }>;
    updateLido(avisoId: number, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusAviso;
        dataLeitura: Date;
        usuarioId: number;
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
