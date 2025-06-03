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
const prisma_service_1 = require("../prisma/prisma.service");
const user_select_type_1 = require("../usuario/types/user-select.type");
const prisma_1 = require("../../../generated/prisma/index.js");
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
    async addGestor(dto) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: dto.usuarioId },
        });
        if (!usuario) {
            throw new common_1.BadRequestException('Usuário não encontrado');
        }
        if (usuario.funcao !== prisma_1.FuncaoUsuario.GESTOR) {
            throw new common_1.BadRequestException('Usuário não possui permissão de gestor');
        }
        await this.prisma.grupoGestor.create({
            data: dto,
        });
        const grupo = await this.findOne(dto.grupoId);
        return grupo;
    }
    async addUsuario(dto) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: dto.usuarioId },
        });
        if (!usuario) {
            throw new common_1.BadRequestException('Usuário não encontrado');
        }
        if (usuario.funcao !== prisma_1.FuncaoUsuario.COLABORADOR) {
            throw new common_1.BadRequestException('Usuário não possui permissão de gestor');
        }
        await this.prisma.usuarioGrupo.create({
            data: dto,
        });
        const grupo = await this.findOne(dto.grupoId);
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
        const data = { ...dto };
        const grupo = await this.findOne(id, gestorId);
        if (!grupo)
            throw new common_1.NotFoundException('Grupo não encontrado ou acesso não autorizado');
        const updated = await this.prisma.grupo.update({
            where: { id: Number(id) },
            data: {
                nome: dto.nome,
                descricao: dto.descricao,
            },
        });
        return updated;
    }
    async remove(id, gestorId) {
        const grupo = await this.findOne(id, gestorId);
        if (!grupo)
            throw new common_1.NotFoundException('Grupo não encontrado ou acesso não autorizado');
        await this.prisma.usuarioGrupo.deleteMany({
            where: {
                grupoId: Number(id),
            },
        });
        await this.prisma.grupoGestor.deleteMany({
            where: {
                grupoId: Number(id),
            },
        });
        await this.prisma.grupo.delete({ where: { id: Number(id) } });
    }
};
exports.GrupoService = GrupoService;
exports.GrupoService = GrupoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GrupoService);
//# sourceMappingURL=grupo.service.js.map