import { PrismaService } from '../prisma/prisma.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
export declare class ComentarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateComentarioDto, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        conteudo: string;
        demandaId: number;
        dataAlteracao: Date | null;
    }>;
    findAll(demandaId: number, usuarioId: number): Promise<({
        usuario: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        conteudo: string;
        demandaId: number;
        dataAlteracao: Date | null;
    })[]>;
    findOne(comentarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        conteudo: string;
        demandaId: number;
        dataAlteracao: Date | null;
    }>;
    update(dto: UpdateComentarioDto, comentarioId: number, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        conteudo: string;
        demandaId: number;
        dataAlteracao: Date | null;
    }>;
    remove(comentarioId: number, usuarioId: number): Promise<{
        id: number;
        dateTimestamp: Date;
        usuarioId: number;
        conteudo: string;
        demandaId: number;
        dataAlteracao: Date | null;
    }>;
}
