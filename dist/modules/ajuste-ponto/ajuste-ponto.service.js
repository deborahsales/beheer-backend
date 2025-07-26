"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AjustePontoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../generated/prisma/index.js");
const prisma_service_1 = require("../prisma/prisma.service");
let AjustePontoService = class AjustePontoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, pontoId, usuarioId) {
        const ponto = await this.prisma.ponto.findFirst({ where: { id: pontoId, usuarioId } });
        if (!ponto)
            throw new common_1.NotFoundException('Ponto não encontrado ou acesso não autorizado');
        return this.prisma.ajustePonto.create({
            data: {
                ...dto,
                pontoId,
                usuarioId,
            },
        });
    }
    findAll(funcaoUsuario, usuarioId) {
        let ajustes;
        if (funcaoUsuario === prisma_1.FuncaoUsuario.RH) {
            ajustes = this.prisma.ajustePonto.findMany({
                include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } } },
            });
        }
        else {
            ajustes = this.prisma.ajustePonto.findMany({
                where: { usuarioId },
                include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } } },
            });
        }
        return ajustes;
    }
    findOne(id, funcaoUsuario, usuarioId) {
        let ajustes;
        if (funcaoUsuario === prisma_1.FuncaoUsuario.RH) {
            ajustes = this.prisma.ajustePonto.findFirst({
                where: { id },
                include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } }, ponto: true },
            });
        }
        else {
            ajustes = this.prisma.ajustePonto.findFirst({
                where: { id, usuarioId },
                include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } }, ponto: true },
            });
        }
        if (!ajustes)
            throw new common_1.NotFoundException('Ajuste não encontrado ou acesso não autorizado');
        return ajustes;
    }
    async update(dto, id, usuarioId) {
        const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id, usuarioId } });
        if (!ajuste) {
            throw new common_1.NotFoundException('Ajuste não encontrado ou acesso não autorizado');
        }
        if (ajuste.status === prisma_1.StatusAjuste.AJUSTADO || ajuste.status === prisma_1.StatusAjuste.RECUSADO)
            throw new common_1.NotFoundException('Não é possível editar uma solicitação de ajuste que já foi gerenciado');
        return this.prisma.ajustePonto.update({
            where: { id, usuarioId },
            data: { dateTimestampAjustado: dto.dateTimestampAjustado, motivo: dto.motivo },
        });
    }
    async updateRh(dto, id, usuarioId) {
        const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id } });
        if (!ajuste) {
            throw new common_1.NotFoundException('Ajuste não encontrado');
        }
        const ajusteAtualizado = await this.prisma.ajustePonto.update({
            where: { id },
            data: { status: dto.status },
        });
        if (ajuste.motivo === prisma_1.MotivoAjuste.DUPLICADO) {
            await this.prisma.ponto.update({
                where: { id: ajuste.pontoId },
                data: {
                    ativo: false,
                },
            });
        }
        else {
            await this.prisma.ponto.update({
                where: { id: ajuste.pontoId },
                data: {
                    dateTimestamp: ajuste.dateTimestampAjustado,
                },
            });
        }
        await this.prisma.gerenciamentoAjustePonto.create({
            data: {
                ajustePontoId: id,
                rhUsuarioId: usuarioId,
            },
        });
        return ajusteAtualizado;
    }
    async remove(id, usuarioId) {
        const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id, usuarioId } });
        if (!ajuste)
            throw new common_1.NotFoundException('Ajuste não encontrado ou acesso não autorizado');
        if (ajuste.status === prisma_1.StatusAjuste.AJUSTADO || ajuste.status === prisma_1.StatusAjuste.RECUSADO)
            throw new common_1.NotFoundException('Não é possível remover uma solicitação de ajuste que já foi gerenciado');
        return this.prisma.ajustePonto.delete({
            where: { id, usuarioId: usuarioId },
        });
    }
};
exports.AjustePontoService = AjustePontoService;
exports.AjustePontoService = AjustePontoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AjustePontoService);
//# sourceMappingURL=ajuste-ponto.service.js.map