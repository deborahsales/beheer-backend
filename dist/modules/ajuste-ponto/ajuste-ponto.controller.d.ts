import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { AjustePontoService } from './ajuste-ponto.service';
import { CreateAjustePontoDto } from './dto/create-ajuste-ponto.dto';
import { UpdateAjustePontoDto } from './dto/update-ajuste-ponto.dto';
import { UpdateGerenciamentoPontoDto } from './dto/update-gerenciamento-ajuste.dto';
export declare class AjustePontoController {
    private ajustePontoService;
    constructor(ajustePontoService: AjustePontoService);
    create(pontoId: number, createAjustePontoDto: CreateAjustePontoDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestampAjustado: Date | null;
        motivo: import("generated/prisma").$Enums.MotivoAjuste;
        status: import("generated/prisma").$Enums.StatusAjuste;
        dateTimestamp: Date;
        usuarioId: number;
        pontoId: number;
    }>;
    findAll(req: RequestWithUser): any;
    findOne(id: number, req: RequestWithUser): any;
    update(id: number, updateAjustePontoDto: UpdateAjustePontoDto, req: RequestWithUser): Promise<{
        id: number;
        dateTimestampAjustado: Date | null;
        motivo: import("generated/prisma").$Enums.MotivoAjuste;
        status: import("generated/prisma").$Enums.StatusAjuste;
        dateTimestamp: Date;
        usuarioId: number;
        pontoId: number;
    }>;
    updateRh(id: number, updateAjustePontoDto: UpdateGerenciamentoPontoDto, req: RequestWithUser): Promise<({
        ponto: {
            id: number;
            dateTimestampAjustado: Date | null;
            dateTimestamp: Date;
            usuarioId: number;
            ip: string;
            imagem: string;
            latitude: number;
            longitude: number;
            ativo: boolean;
        };
    } & {
        id: number;
        dateTimestampAjustado: Date | null;
        motivo: import("generated/prisma").$Enums.MotivoAjuste;
        status: import("generated/prisma").$Enums.StatusAjuste;
        dateTimestamp: Date;
        usuarioId: number;
        pontoId: number;
    }) | null>;
    delete(id: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestampAjustado: Date | null;
        motivo: import("generated/prisma").$Enums.MotivoAjuste;
        status: import("generated/prisma").$Enums.StatusAjuste;
        dateTimestamp: Date;
        usuarioId: number;
        pontoId: number;
    }>;
}
