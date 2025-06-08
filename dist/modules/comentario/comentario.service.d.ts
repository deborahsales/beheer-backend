import { PrismaService } from '../prisma/prisma.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
export declare class ComentarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateComentarioDto, usuarioId: number): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
    findAll(demandaId: number, usuarioId: number): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }[]>;
    findOne(comentarioId: number): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
    update(dto: UpdateComentarioDto, comentarioId: number, usuarioId: number): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
    remove(comentarioId: number, usuarioId: number): Promise<{
        id: number;
        conteudo: string;
        dateTimestamp: Date;
        dataAlteracao: Date | null;
        demandaId: number;
        usuarioId: number;
    }>;
}
