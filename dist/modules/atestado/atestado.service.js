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
exports.AtestadoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../generated/prisma/index.js");
const prisma_service_1 = require("../prisma/prisma.service");
let AtestadoService = class AtestadoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto, usuarioId) {
        return this.prisma.atestado.create({
            data: {
                ...dto,
                usuarioId,
            },
        });
    }
    findAll(funcaoUsuario, usuarioId) {
        let atestados;
        if (funcaoUsuario === prisma_1.FuncaoUsuario.RH) {
            atestados = this.prisma.atestado.findMany({
                include: { gerenciamentoAtestado: true, usuario: { select: { nome: true } } },
            });
        }
        else {
            atestados = this.prisma.atestado.findMany({
                where: { usuarioId },
                include: { gerenciamentoAtestado: true, usuario: { select: { nome: true } } },
            });
        }
        return atestados;
    }
    findOne(id, funcaoUsuario, usuarioId) {
        let atestado;
        if (funcaoUsuario === prisma_1.FuncaoUsuario.RH) {
            atestado = this.prisma.atestado.findFirst({
                where: { id },
                include: { gerenciamentoAtestado: true, usuario: { select: { nome: true } } },
            });
        }
        else {
            atestado = this.prisma.atestado.findFirst({
                where: { id, usuarioId },
                include: { gerenciamentoAtestado: true, usuario: { select: { nome: true } } },
            });
        }
        if (!atestado)
            throw new common_1.NotFoundException('Atestado não encontrado ou acesso não autorizado');
        return atestado;
    }
    async update(dto, id, usuarioId) {
        const atestado = await this.prisma.atestado.findFirst({ where: { id, usuarioId } });
        if (!atestado) {
            throw new common_1.NotFoundException('Atestado não encontrado ou acesso não autorizado');
        }
        if (atestado.status === prisma_1.StatusAtestado.ACEITE || atestado.status === prisma_1.StatusAtestado.RECUSADO)
            throw new common_1.NotFoundException('Não é possível editar um atestado que já foi gerenciado');
        return this.prisma.atestado.update({
            where: { id, usuarioId },
            data: { ...dto },
        });
    }
    async updateRh(dto, id, usuarioId) {
        const atestado = await this.prisma.atestado.findFirst({ where: { id } });
        if (!atestado) {
            throw new common_1.NotFoundException('Atestado não encontrado');
        }
        const atestadoAtualizado = await this.prisma.atestado.update({
            where: { id },
            data: { status: dto.status },
        });
        await this.prisma.gerenciamentoAtestado.create({
            data: {
                atestadoId: id,
                rhUsuarioId: usuarioId,
            },
        });
        return atestadoAtualizado;
    }
    async remove(id, usuarioId) {
        const atestado = await this.prisma.atestado.findFirst({ where: { id, usuarioId } });
        if (!atestado)
            throw new common_1.NotFoundException('atestado não encontrado ou acesso não autorizado');
        if (atestado.status === prisma_1.StatusAtestado.ACEITE || atestado.status === prisma_1.StatusAtestado.RECUSADO)
            throw new common_1.NotFoundException('Não é possível remover um atestado que já foi gerenciado');
        return this.prisma.atestado.delete({
            where: { id, usuarioId: usuarioId },
        });
    }
};
exports.AtestadoService = AtestadoService;
exports.AtestadoService = AtestadoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AtestadoService);
//# sourceMappingURL=atestado.service.js.map