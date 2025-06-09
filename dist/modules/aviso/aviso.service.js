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
exports.AvisoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../generated/prisma/index.js");
const prisma_service_1 = require("../prisma/prisma.service");
let AvisoService = class AvisoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, usuarioId) {
        const usuarios = dto.avisoUsuario?.length
            ? await this.prisma.usuario.findMany({
                where: {
                    id: { in: dto.avisoUsuario },
                },
                select: { id: true },
            })
            : [];
        const usuariosIds = usuarios.map((u) => u.id);
        return this.prisma.aviso.create({
            data: {
                assunto: dto.assunto,
                conteudo: dto.conteudo,
                gestorRhUsuarioId: usuarioId,
                avisoUsuario: usuariosIds.length
                    ? {
                        create: usuariosIds.map((id) => ({ usuarioId: id })),
                    }
                    : undefined,
            },
        });
    }
    findAll(usuarioId) {
        return this.prisma.aviso.findMany({
            where: {
                OR: [
                    { avisoUsuario: { some: { usuarioId: usuarioId } } },
                    { gestorRhUsuarioId: usuarioId },
                ],
            },
            include: {
                avisoUsuario: {
                    where: {
                        usuarioId: usuarioId,
                    },
                },
            },
        });
    }
    async findOne(avisoId, usuarioId) {
        const aviso = await this.prisma.aviso.findFirst({
            where: {
                id: avisoId,
                OR: [
                    { avisoUsuario: { some: { usuarioId: usuarioId } } },
                    { gestorRhUsuarioId: usuarioId },
                ],
            },
            include: {
                avisoUsuario: {
                    where: {
                        usuarioId: usuarioId,
                    },
                },
            },
        });
        if (!aviso)
            throw new common_1.NotFoundException('Aviso não encontrado ou acesso não autorizado');
        return aviso;
    }
    async updateLido(avisoId, usuarioId) {
        await this.findOne(avisoId, usuarioId);
        return this.prisma.avisoUsuario.update({
            where: {
                usuarioId_avisoId: {
                    usuarioId,
                    avisoId,
                },
            },
            data: {
                status: prisma_1.StatusAviso.LIDO,
            },
        });
    }
    async update(dto, avisoId, usuarioId) {
        const aviso = await this.prisma.aviso.findFirst({
            where: { id: avisoId, gestorRhUsuarioId: usuarioId },
            include: {
                avisoUsuario: true,
            },
        });
        if (!aviso)
            throw new common_1.NotFoundException('Aviso não encontrado ou acesso não autorizado');
        await this.prisma.aviso.update({
            where: { id: avisoId, gestorRhUsuarioId: usuarioId },
            data: {
                assunto: dto.assunto,
                conteudo: dto.conteudo,
            },
        });
        if (dto.avisoUsuario) {
            const usuariosValidos = await this.prisma.usuario.findMany({
                where: {
                    id: { in: dto.avisoUsuario },
                },
                select: { id: true },
            });
            const novosUsuarios = usuariosValidos.map((u) => u.id);
            const usuariosAtuais = await this.prisma.avisoUsuario.findMany({
                where: { avisoId: avisoId },
                select: { usuarioId: true },
            });
            const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);
            const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
            const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));
            if (remover.length) {
                await this.prisma.avisoUsuario.deleteMany({
                    where: {
                        avisoId: avisoId,
                        usuarioId: { in: remover },
                    },
                });
            }
            if (adicionar.length) {
                await this.prisma.avisoUsuario.createMany({
                    data: adicionar.map((usuarioId) => ({ usuarioId, avisoId: avisoId })),
                    skipDuplicates: true,
                });
            }
        }
        return this.prisma.aviso.findFirst({ where: { id: avisoId } });
    }
    async remove(avisoId, usuarioId) {
        const aviso = await this.prisma.aviso.findFirst({
            where: { id: avisoId, gestorRhUsuarioId: usuarioId },
            include: {
                avisoUsuario: true,
            },
        });
        if (!aviso)
            throw new common_1.NotFoundException('Aviso não encontrado ou acesso não autorizado');
        return this.prisma.aviso.delete({ where: { id: avisoId, gestorRhUsuarioId: usuarioId } });
    }
};
exports.AvisoService = AvisoService;
exports.AvisoService = AvisoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AvisoService);
//# sourceMappingURL=aviso.service.js.map