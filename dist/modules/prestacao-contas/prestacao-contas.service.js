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
exports.PrestacaoContasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../generated/prisma/index.js");
const prisma_service_1 = require("../prisma/prisma.service");
let PrestacaoContasService = class PrestacaoContasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto, usuarioId) {
        return this.prisma.prestacaoContas.create({
            data: {
                ...dto,
                usuarioId,
            },
        });
    }
    findAll(funcaoUsuario, usuarioId) {
        let prestacoes;
        if (funcaoUsuario === prisma_1.FuncaoUsuario.RH) {
            prestacoes = this.prisma.prestacaoContas.findMany({
                include: { gerenciamentoPrestacao: true },
            });
        }
        else {
            prestacoes = this.prisma.prestacaoContas.findMany({
                where: { usuarioId },
                include: { gerenciamentoPrestacao: true },
            });
        }
        return prestacoes;
    }
    findOne(id, funcaoUsuario, usuarioId) {
        let prestacao;
        if (funcaoUsuario === prisma_1.FuncaoUsuario.RH) {
            prestacao = this.prisma.prestacaoContas.findFirst({
                where: { id },
                include: { gerenciamentoPrestacao: true },
            });
        }
        else {
            prestacao = this.prisma.prestacaoContas.findFirst({
                where: { id, usuarioId },
                include: { gerenciamentoPrestacao: true },
            });
        }
        if (!prestacao)
            throw new common_1.NotFoundException('Prestação não encontrada ou acesso não autorizado');
        return prestacao;
    }
    async update(dto, id, usuarioId) {
        const prestacao = await this.prisma.prestacaoContas.findFirst({ where: { id, usuarioId } });
        if (!prestacao) {
            throw new common_1.NotFoundException('Prestação não encontrada ou acesso não autorizado');
        }
        if (prestacao.status === prisma_1.StatusPrestacao.ACEITE ||
            prestacao.status === prisma_1.StatusPrestacao.RECUSADA)
            throw new common_1.NotFoundException('Não é possível editar uma prestação que já foi gerenciada');
        return this.prisma.prestacaoContas.update({
            where: { id, usuarioId },
            data: { ...dto },
        });
    }
    async updateRh(dto, id, usuarioId) {
        const prestacao = await this.prisma.prestacaoContas.findFirst({ where: { id } });
        if (!prestacao) {
            throw new common_1.NotFoundException('Prestação não encontrada');
        }
        const prestacaoAtualizado = await this.prisma.prestacaoContas.update({
            where: { id },
            data: { status: dto.status },
        });
        await this.prisma.gerenciamentoPrestacao.create({
            data: {
                prestacaoId: id,
                rhUsuarioId: usuarioId,
            },
        });
        return prestacaoAtualizado;
    }
    async remove(id, usuarioId) {
        const prestacao = await this.prisma.prestacaoContas.findFirst({ where: { id, usuarioId } });
        if (!prestacao)
            throw new common_1.NotFoundException('Prestação não encontrada ou acesso não autorizado');
        if (prestacao.status === prisma_1.StatusPrestacao.ACEITE ||
            prestacao.status === prisma_1.StatusPrestacao.RECUSADA)
            throw new common_1.NotFoundException('Não é possível remover um prestação que já foi gerenciada');
        return this.prisma.prestacaoContas.delete({
            where: { id, usuarioId: usuarioId },
        });
    }
};
exports.PrestacaoContasService = PrestacaoContasService;
exports.PrestacaoContasService = PrestacaoContasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrestacaoContasService);
//# sourceMappingURL=prestacao-contas.service.js.map