import { PrismaService } from '../prisma/prisma.service';
import { CreateAjustePontoDto } from './dto/create-ajuste-ponto.dto';
import { UpdateAjustePontoDto } from './dto/update-ajuste-ponto.dto';
export declare class AjustePontoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAjustePontoDto, pontoId: number, usuarioId: number): Promise<{
        id: number;
        dateTimestampAjustado: Date;
        motivo: import("generated/prisma").$Enums.MotivoAjuste;
        status: import("generated/prisma").$Enums.StatusAjuste;
        dateTimestamp: Date;
        usuarioId: number;
        pontoId: number;
    }>;
    findAll(funcaoUsuario: string, usuarioId: number): any;
    findOne(id: number, funcaoUsuario: string, usuarioId: number): any;
    update(dto: UpdateAjustePontoDto, id: number, usuarioId: number): Promise<{
        id: number;
        dateTimestampAjustado: Date;
        motivo: import("generated/prisma").$Enums.MotivoAjuste;
        status: import("generated/prisma").$Enums.StatusAjuste;
        dateTimestamp: Date;
        usuarioId: number;
        pontoId: number;
    }>;
    remove(id: number, usuarioId: number): Promise<{
        id: number;
        dateTimestampAjustado: Date;
        motivo: import("generated/prisma").$Enums.MotivoAjuste;
        status: import("generated/prisma").$Enums.StatusAjuste;
        dateTimestamp: Date;
        usuarioId: number;
        pontoId: number;
    }>;
}
