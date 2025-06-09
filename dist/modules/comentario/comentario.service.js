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
exports.ComentarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ComentarioService = class ComentarioService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, usuarioId) {
        const demanda = await this.prisma.demanda.findFirst({
            where: {
                id: dto.demandaId,
                OR: [
                    { usuariosDemanda: { some: { usuarioId: usuarioId } } },
                    { gestorUsuarioId: usuarioId },
                ],
            },
        });
        if (!demanda)
            throw new common_1.NotFoundException('Demanda não encontrada ou acesso não autorizado');
        return this.prisma.comentario.create({
            data: {
                ...dto,
                usuarioId: usuarioId,
            },
        });
    }
    async findAll(demandaId, usuarioId) {
        const demanda = await this.prisma.demanda.findFirst({
            where: {
                id: demandaId,
                OR: [
                    { usuariosDemanda: { some: { usuarioId: usuarioId } } },
                    { gestorUsuarioId: usuarioId },
                ],
            },
        });
        if (!demanda)
            throw new common_1.NotFoundException('Demanda não encontrada ou acesso não autorizado');
        return this.prisma.comentario.findMany({ where: { demandaId: demandaId } });
    }
    async findOne(comentarioId) {
        const comentario = await this.prisma.comentario.findFirst({
            where: { id: comentarioId },
        });
        if (!comentario)
            throw new common_1.NotFoundException('Comentário não encontrado');
        return comentario;
    }
    async update(dto, comentarioId, usuarioId) {
        const comentario = await this.prisma.comentario.findFirst({
            where: { id: comentarioId, usuarioId: usuarioId },
        });
        if (!comentario)
            throw new common_1.NotFoundException('Comentário não encontrado  ou acesso não autorizado');
        return this.prisma.comentario.update({
            where: { id: comentarioId, usuarioId: usuarioId },
            data: {
                conteudo: dto.conteudo,
                dataAlteracao: new Date(),
            },
        });
    }
    async remove(comentarioId, usuarioId) {
        const comentario = await this.prisma.comentario.findFirst({
            where: { id: comentarioId, usuarioId: usuarioId },
        });
        if (!comentario)
            throw new common_1.NotFoundException('Comentário não encontrado ou acesso não autorizado');
        return this.prisma.comentario.delete({
            where: { id: comentarioId, usuarioId: usuarioId },
        });
    }
};
exports.ComentarioService = ComentarioService;
exports.ComentarioService = ComentarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComentarioService);
//# sourceMappingURL=comentario.service.js.map