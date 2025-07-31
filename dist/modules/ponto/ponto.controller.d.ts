import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';
import { PontoService } from './ponto.service';
export declare class PontoController {
    private pontoService;
    constructor(pontoService: PontoService);
    create(dto: CreatePontoDto, imagem: Express.Multer.File, req: RequestWithUser): import("generated/prisma").Prisma.Prisma__PontoClient<{
        usuario: {
            id: number;
            nome: string;
        };
    } & {
        dateTimestampAjustado: Date | null;
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        ativo: boolean;
        usuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(req: RequestWithUser): Promise<any>;
    findOne(id: number, req: RequestWithUser): Promise<any>;
    update(id: number, updatePontoDto: UpdatePontoDto): Promise<{
        dateTimestampAjustado: Date | null;
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        ativo: boolean;
        usuarioId: number;
    }>;
    delete(id: number): Promise<{
        dateTimestampAjustado: Date | null;
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        ativo: boolean;
        usuarioId: number;
    }>;
}
