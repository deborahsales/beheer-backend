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
exports.GrupoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../generated/prisma/index.js");
const prisma_service_1 = require("../prisma/prisma.service");
const user_select_type_1 = require("../usuario/types/user-select.type");
let GrupoService = class GrupoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, gestorId) {
        const grupo = await this.prisma.grupo.create({
            data: {
                nome: dto.nome,
                descricao: dto.descricao,
                gestores: {
                    create: {
                        usuarioId: gestorId,
                    },
                },
                usuarios: dto.usuarios?.length
                    ? {
                        create: dto.usuarios.map((id) => ({
                            usuarioId: id,
                        })),
                    }
                    : undefined,
            },
            include: {
                gestores: {
                    include: {
                        usuario: { select: user_select_type_1.userSelect },
                    },
                },
                usuarios: {
                    include: {
                        usuario: { select: user_select_type_1.userSelect },
                    },
                },
            },
        });
        return grupo;
    }
    findAll(usuarioId) {
        return this.prisma.grupo.findMany({
            where: {
                OR: [
                    {
                        gestores: {
                            some: {
                                usuarioId: usuarioId,
                            },
                        },
                    },
                    {
                        usuarios: {
                            some: {
                                usuarioId: usuarioId,
                            },
                        },
                    },
                ],
            },
            include: {
                gestores: {
                    include: {
                        usuario: { select: user_select_type_1.userSelect },
                    },
                },
                usuarios: {
                    include: {
                        usuario: { select: user_select_type_1.userSelect },
                    },
                },
            },
        });
    }
    async findOne(id, gestorId) {
        const grupo = await this.prisma.grupo.findFirst({
            where: {
                id: Number(id),
                ...(gestorId && {
                    gestores: {
                        some: {
                            usuarioId: gestorId,
                        },
                    },
                }),
            },
            include: {
                gestores: {
                    include: {
                        usuario: { select: user_select_type_1.userSelect },
                    },
                },
                usuarios: {
                    include: {
                        usuario: { select: user_select_type_1.userSelect },
                    },
                },
            },
        });
        if (!grupo)
            throw new common_1.NotFoundException('Grupo não encontrado');
        return grupo;
    }
    async update(id, dto, gestorId) {
        const grupo = await this.findOne(id, gestorId);
        if (!grupo)
            throw new common_1.NotFoundException('Grupo não encontrado ou acesso não autorizado');
        await this.prisma.grupo.update({
            where: { id: Number(id) },
            data: {
                nome: dto.nome,
                descricao: dto.descricao,
            },
        });
        if (dto.usuarios) {
            const usuariosValidos = await this.prisma.usuario.findMany({
                where: {
                    id: { in: dto.usuarios },
                    funcao: prisma_1.FuncaoUsuario.COLABORADOR,
                },
                select: { id: true },
            });
            const novosUsuarios = usuariosValidos.map((u) => u.id);
            const usuariosAtuais = await this.prisma.usuarioGrupo.findMany({
                where: { grupoId: Number(id) },
                select: { usuarioId: true },
            });
            const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);
            const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
            const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));
            if (remover.length) {
                await this.prisma.usuarioGrupo.deleteMany({
                    where: {
                        grupoId: Number(id),
                        usuarioId: { in: remover },
                    },
                });
            }
            if (adicionar.length) {
                await this.prisma.usuarioGrupo.createMany({
                    data: adicionar.map((usuarioId) => ({ usuarioId, grupoId: Number(id) })),
                    skipDuplicates: true,
                });
            }
        }
        if (dto.gestores) {
            const gestoresValidos = await this.prisma.usuario.findMany({
                where: {
                    id: { in: dto.gestores },
                    funcao: prisma_1.FuncaoUsuario.GESTOR,
                },
                select: { id: true },
            });
            const novosGestores = gestoresValidos.map((u) => u.id);
            const gestoresAtuais = await this.prisma.usuarioGrupo.findMany({
                where: { grupoId: Number(id) },
                select: { usuarioId: true },
            });
            const idsAtuais = gestoresAtuais.map((u) => u.usuarioId);
            const remover = idsAtuais.filter((id) => !novosGestores.includes(id));
            const adicionar = novosGestores.filter((id) => !idsAtuais.includes(id));
            if (remover.length) {
                await this.prisma.grupoGestor.deleteMany({
                    where: {
                        grupoId: Number(id),
                        usuarioId: { in: remover },
                    },
                });
            }
            if (adicionar.length) {
                await this.prisma.grupoGestor.createMany({
                    data: adicionar.map((usuarioId) => ({ usuarioId, grupoId: Number(id) })),
                    skipDuplicates: true,
                });
            }
        }
        return this.findOne(id);
    }
    async remove(id, gestorId) {
        const grupo = await this.findOne(id, gestorId);
        if (!grupo)
            throw new common_1.NotFoundException('Grupo não encontrado ou acesso não autorizado');
        await this.prisma.grupo.delete({ where: { id: Number(id) } });
    }
};
exports.GrupoService = GrupoService;
exports.GrupoService = GrupoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GrupoService);
//# sourceMappingURL=grupo.service.js.map