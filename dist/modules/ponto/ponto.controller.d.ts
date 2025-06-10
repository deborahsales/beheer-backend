import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';
import { PontoService } from './ponto.service';
export declare class PontoController {
    private pontoService;
    constructor(pontoService: PontoService);
    create(createPontoDto: CreatePontoDto, req: RequestWithUser): import("generated/prisma").Prisma.Prisma__PontoClient<{
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        usuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(req: RequestWithUser): Promise<any>;
    findOne(id: number, req: RequestWithUser): Promise<any>;
    update(id: number, updatePontoDto: UpdatePontoDto): Promise<{
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        usuarioId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        dateTimestamp: Date;
        ip: string;
        imagem: string;
        latitude: number;
        longitude: number;
        usuarioId: number;
    }>;
}
