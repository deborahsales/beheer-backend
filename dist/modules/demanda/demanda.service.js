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
exports.DemandaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../generated/prisma/index.js");
const to_date_only_1 = require("../../common/utils/to-date-only");
const prisma_service_1 = require("../prisma/prisma.service");
const user_select_type_1 = require("../usuario/types/user-select.type");
let DemandaService = class DemandaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, gestorId) {
        if (dto.cronogramaId) {
            const cronograma = await this.prisma.cronograma.findUnique({
                where: { id: dto.cronogramaId },
            });
            if (!cronograma)
                throw new common_1.NotFoundException('Conograma não encontrado!');
            if (dto.prazo) {
                const dataInicio = (0, to_date_only_1.toDateOnly)(new Date(cronograma.dataInicio));
                const dataTermino = (0, to_date_only_1.toDateOnly)(new Date(cronograma.dataTermino));
                const prazo = (0, to_date_only_1.toDateOnly)(new Date(dto.prazo));
                if (prazo < dataInicio || prazo > dataTermino) {
                    throw new common_1.ForbiddenException('O prazo da demanda não é compatível com o cronograma');
                }
            }
        }
        const usuarios = dto.usuariosDemanda?.length
            ? await this.prisma.usuario.findMany({
                where: {
                    id: { in: dto.usuariosDemanda },
                },
                select: { id: true },
            })
            : [];
        const usuariosIds = usuarios.map((u) => u.id);
        const grupos = dto.gruposDemanda?.length
            ? await this.prisma.grupo.findMany({
                where: {
                    id: { in: dto.gruposDemanda },
                },
                select: { id: true },
            })
            : [];
        const gruposIds = grupos.map((u) => u.id);
        return this.prisma.demanda.create({
            data: {
                ...dto,
                gestorUsuarioId: gestorId,
                usuariosDemanda: usuariosIds.length
                    ? {
                        create: usuariosIds.map((id) => ({ usuarioId: id })),
                    }
                    : undefined,
                gruposDemanda: gruposIds.length
                    ? {
                        create: gruposIds.map((id) => ({ grupoId: id })),
                    }
                    : undefined,
            },
        });
    }
    async atualizarDemandasAtrasadasPorFiltro(whereFilter) {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        await this.prisma.demanda.updateMany({
            where: {
                AND: [
                    whereFilter,
                    { prazo: { lt: hoje.toISOString() } },
                    { status: { notIn: ['ATRASADA', 'FINALIZADA'] } },
                ],
            },
            data: { status: 'ATRASADA' },
        });
    }
    async findAll(usuarioId, filters) {
        const gruposUsuario = await this.prisma.grupo.findMany({
            where: {
                usuarios: {
                    some: {
                        usuarioId: usuarioId,
                    },
                },
            },
            include: {
                usuarios: {
                    include: {
                        usuario: { select: user_select_type_1.userSelect },
                    },
                },
            },
        });
        const grupoIds = gruposUsuario.map((grupo) => grupo.id);
        const { status, prioridade } = filters;
        const filtroWhere = {
            OR: [
                { gestorUsuarioId: usuarioId },
                { usuariosDemanda: { some: { usuarioId: usuarioId } } },
                { gruposDemanda: { some: { grupoId: { in: grupoIds } } } },
            ],
            ...(status ? { status: status } : {}),
            ...(prioridade ? { prioridade: prioridade } : {}),
        };
        await this.atualizarDemandasAtrasadasPorFiltro(filtroWhere);
        return this.prisma.demanda.findMany({
            where: filtroWhere,
            include: {
                usuariosDemanda: true,
                gruposDemanda: true,
            },
        });
    }
    async findAllByGroup(groupId, filters) {
        const { status, prioridade } = filters;
        const filtroWhere = {
            OR: [{ gruposDemanda: { some: { grupoId: groupId } } }],
            ...(status ? { status: status } : {}),
            ...(prioridade ? { prioridade: prioridade } : {}),
        };
        await this.atualizarDemandasAtrasadasPorFiltro(filtroWhere);
        return this.prisma.demanda.findMany({
            where: filtroWhere,
        });
    }
    async findAllByTimeline(timelineId, filters) {
        const { status, prioridade } = filters;
        const filtroWhere = {
            OR: [{ cronogramaId: timelineId }],
            ...(status ? { status: status } : {}),
            ...(prioridade ? { prioridade: prioridade } : {}),
        };
        await this.atualizarDemandasAtrasadasPorFiltro(filtroWhere);
        return this.prisma.demanda.findMany({
            where: filtroWhere,
        });
    }
    async findOne(id, gestorId) {
        const demanda = await this.prisma.demanda.findFirst({
            where: {
                id: id,
                ...(gestorId && {
                    gestorUsuarioId: gestorId,
                }),
            },
            include: {
                usuariosDemanda: { include: { usuario: { select: { nome: true } } } },
                gruposDemanda: { include: { grupo: { select: { nome: true } } } },
                comentariosDemanda: true,
                gestor: { select: { nome: true } },
                cronograma: true,
            },
        });
        if (!demanda)
            throw new common_1.NotFoundException('Demanda não encontrada ou acesso não autorizado');
        return demanda;
    }
    async updateStatus(id, dto, usuarioId) {
        await this.findOne(id);
        return this.prisma.demanda.update({
            where: { id: id },
            data: {
                status: dto.status,
            },
        });
    }
    async update(id, dto, gestorId) {
        await this.findOne(id, gestorId);
        if (dto.cronogramaId) {
            const cronograma = await this.prisma.cronograma.findUnique({
                where: { id: dto.cronogramaId },
            });
            if (!cronograma)
                throw new common_1.NotFoundException('Conograma não encontrado!');
            if (dto.prazo) {
                const dataInicio = (0, to_date_only_1.toDateOnly)(new Date(cronograma.dataInicio));
                const dataTermino = (0, to_date_only_1.toDateOnly)(new Date(cronograma.dataTermino));
                const prazo = (0, to_date_only_1.toDateOnly)(new Date(dto.prazo));
                if (prazo < dataInicio || prazo > dataTermino) {
                    throw new common_1.ForbiddenException('O prazo da demanda não é compatível com o cronograma');
                }
            }
        }
        await this.prisma.demanda.update({
            where: { id: id },
            data: {
                titulo: dto.titulo,
                descricao: dto.descricao,
                prazo: dto.prazo,
                status: dto.status,
                prioridade: dto.prioridade,
            },
        });
        if (dto.usuariosDemanda) {
            const usuariosValidos = await this.prisma.usuario.findMany({
                where: {
                    id: { in: dto.usuariosDemanda },
                    funcao: prisma_1.FuncaoUsuario.COLABORADOR,
                },
                select: { id: true },
            });
            const novosUsuarios = usuariosValidos.map((u) => u.id);
            const usuariosAtuais = await this.prisma.demandaUsuario.findMany({
                where: { demandaId: id },
                select: { usuarioId: true },
            });
            const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);
            const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
            const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));
            if (remover.length) {
                await this.prisma.demandaUsuario.deleteMany({
                    where: {
                        demandaId: id,
                        usuarioId: { in: remover },
                    },
                });
            }
            if (adicionar.length) {
                await this.prisma.demandaUsuario.createMany({
                    data: adicionar.map((usuarioId) => ({ usuarioId, demandaId: id })),
                    skipDuplicates: true,
                });
            }
        }
        if (dto.gruposDemanda) {
            const gruposValidos = await this.prisma.grupo.findMany({
                where: {
                    id: { in: dto.gruposDemanda },
                },
                select: { id: true },
            });
            const novosGrupos = gruposValidos.map((u) => u.id);
            const gruposAtuais = await this.prisma.demandaGrupo.findMany({
                where: { demandaId: id },
                select: { grupoId: true },
            });
            const idsAtuais = gruposAtuais.map((u) => u.grupoId);
            const remover = idsAtuais.filter((id) => !novosGrupos.includes(id));
            const adicionar = novosGrupos.filter((id) => !idsAtuais.includes(id));
            if (remover.length) {
                await this.prisma.demandaGrupo.deleteMany({
                    where: {
                        demandaId: id,
                        grupoId: { in: remover },
                    },
                });
            }
            if (adicionar.length) {
                await this.prisma.demandaGrupo.createMany({
                    data: adicionar.map((grupoId) => ({ grupoId, demandaId: id })),
                    skipDuplicates: true,
                });
            }
        }
        return this.findOne(id);
    }
    async remove(id, gestorId) {
        await this.findOne(id, gestorId);
        return this.prisma.demanda.delete({ where: { id: id } });
    }
};
exports.DemandaService = DemandaService;
exports.DemandaService = DemandaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DemandaService);
//# sourceMappingURL=demanda.service.js.map