import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { ComentarioService } from './comentario.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
export declare class ComentarioController {
    private comentarioService;
    constructor(comentarioService: ComentarioService);
    create(createComentarioDto: CreateComentarioDto, req: RequestWithUser): Promise<{
        usuario: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
    findAll(demandaId: number, req: RequestWithUser): Promise<({
        usuario: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    })[]>;
    findOne(comentarioId: number): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
    update(comentarioId: number, updateComentarioDto: UpdateComentarioDto, req: RequestWithUser): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
    delete(comentarioId: number, req: RequestWithUser): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
}
