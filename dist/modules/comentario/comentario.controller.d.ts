import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { ComentarioService } from './comentario.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
export declare class ComentarioController {
    private comentarioService;
    constructor(comentarioService: ComentarioService);
    create(createComentarioDto: CreateComentarioDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        demandaId: number;
        conteudo: string;
        dataAlteracao: Date | null;
    }>;
    findAll(demandaId: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        demandaId: number;
        conteudo: string;
        dataAlteracao: Date | null;
    }[]>;
    findOne(comentarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        demandaId: number;
        conteudo: string;
        dataAlteracao: Date | null;
    }>;
    update(comentarioId: number, updateComentarioDto: UpdateComentarioDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        demandaId: number;
        conteudo: string;
        dataAlteracao: Date | null;
    }>;
    delete(comentarioId: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        demandaId: number;
        conteudo: string;
        dataAlteracao: Date | null;
    }>;
}
