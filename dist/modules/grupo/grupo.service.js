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
        const colaboradores = dto.usuarios?.length
            ? await this.prisma.usuario.findMany({
                where: {
                    id: { in: dto.usuarios },
                    funcao: prisma_1.FuncaoUsuario.COLABORADOR,
                },
                select: { id: true },
            })
            : [];
        const colaboradorIds = colaboradores.map((u) => u.id);
        return this.prisma.grupo.create({
            data: {
                nome: dto.nome,
                descricao: dto.descricao,
                gestores: {
                    create: {
                        usuarioId: gestorId,
                    },
                },
                usuarios: colaboradorIds.length
                    ? {
                        create: colaboradorIds.map((id) => ({
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
    async findOne(id, usuarioId) {
        const grupo = await this.prisma.grupo.findFirst({
            where: {
                id: id,
                OR: [
                    {
                        gestores: {
                            some: { usuarioId },
                        },
                    },
                    {
                        usuarios: {
                            some: { usuarioId },
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
        if (!grupo)
            throw new common_1.NotFoundException('Grupo não encontrado ou acesso não autorizado');
        return grupo;
    }
    async update(id, dto, gestorId) {
        await this.findOne(id, gestorId);
        await this.prisma.grupo.update({
            where: { id: id },
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
                where: { grupoId: id },
                select: { usuarioId: true },
            });
            const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);
            const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
            const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));
            if (remover.length) {
                await this.prisma.usuarioGrupo.deleteMany({
                    where: {
                        grupoId: id,
                        usuarioId: { in: remover },
                    },
                });
            }
            if (adicionar.length) {
                await this.prisma.usuarioGrupo.createMany({
                    data: adicionar.map((usuarioId) => ({ usuarioId, grupoId: id })),
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
            let novosGestores = gestoresValidos.map((u) => u.id);
            if (!novosGestores.includes(gestorId)) {
                novosGestores.push(gestorId);
            }
            const gestoresAtuais = await this.prisma.grupoGestor.findMany({
                where: { grupoId: id },
                select: { usuarioId: true },
            });
            const idsAtuaisGestores = gestoresAtuais.map((u) => u.usuarioId);
            const removerGestores = idsAtuaisGestores
                .filter((id) => !novosGestores.includes(id))
                .filter((id) => id !== gestorId);
            const adicionarGestores = novosGestores.filter((id) => !idsAtuaisGestores.includes(id));
            if (removerGestores.length) {
                await this.prisma.grupoGestor.deleteMany({
                    where: {
                        grupoId: id,
                        usuarioId: { in: removerGestores },
                    },
                });
            }
            if (adicionarGestores.length) {
                await this.prisma.grupoGestor.createMany({
                    data: adicionarGestores.map((usuarioId) => ({ usuarioId, grupoId: id })),
                    skipDuplicates: true,
                });
            }
        }
        return this.findOne(id, gestorId);
    }
    async remove(id, gestorId) {
        await this.findOne(id, gestorId);
        return this.prisma.grupo.delete({ where: { id: id } });
    }
};
exports.GrupoService = GrupoService;
exports.GrupoService = GrupoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GrupoService);
//# sourceMappingURL=grupo.service.js.map