import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreatePrestacaoContasDto } from './dto/create-prestacao-contas.dto';
import { UpdateGerenciamentoPrestacaoDto } from './dto/update-gerenciamento-prestacao.dto';
import { UpdatePrestacaoContasDto } from './dto/update-prestacao-contas.dto';
import { PrestacaoContasService } from './prestacao-contas.service';
export declare class PrestacaoContasController {
    private prestacaoContasService;
    constructor(prestacaoContasService: PrestacaoContasService);
    create(dto: CreatePrestacaoContasDto, imagem: Express.Multer.File, req: RequestWithUser): import("generated/prisma").Prisma.Prisma__PrestacaoContasClient<{
        usuario: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(req: RequestWithUser): any;
    findOne(id: number, req: RequestWithUser): any;
    update(id: number, updatePrestacaoDto: UpdatePrestacaoContasDto, req: RequestWithUser): Promise<{
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }>;
    updateRh(id: number, UpdatePrestacaoDto: UpdateGerenciamentoPrestacaoDto, req: RequestWithUser): Promise<{
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }>;
    delete(id: number, req: RequestWithUser): Promise<{
        id: number;
        descricao: string;
        data: Date;
        valor: import("generated/prisma/runtime/library").Decimal;
        imagem: string;
        dateTimestamp: Date;
        status: import("generated/prisma").$Enums.StatusPrestacao;
        usuarioId: number;
    }>;
}
