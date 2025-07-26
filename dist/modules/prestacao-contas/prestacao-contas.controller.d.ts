import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreatePrestacaoContasDto } from './dto/create-prstacao-contas.dto';
import { UpdateGerenciamentoPrestacaoDto } from './dto/update-gerenciamento-prestacao.dto';
import { UpdatePrestacaoContasDto } from './dto/update-prestacao-contas.dto';
import { PrestacaoContasService } from './prestacao-contas.service';
export declare class PrestacaoContasController {
    private prestacaoContasService;
    constructor(prestacaoContasService: PrestacaoContasService);
    create(dto: CreatePrestacaoContasDto, imagem: Express.Multer.File, req: RequestWithUser): import("generated/prisma").Prisma.Prisma__PrestacaoContasClient<{
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(req: RequestWithUser): any;
    findOne(id: number, req: RequestWithUser): any;
    update(id: number, updatePrestacaoDto: UpdatePrestacaoContasDto, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }>;
    updateRh(id: number, UpdatePrestacaoDto: UpdateGerenciamentoPrestacaoDto, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }>;
    delete(id: number, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusPrestacao;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        data: Date;
        descricao: string;
        valor: import("generated/prisma/runtime/library").Decimal;
    }>;
}
