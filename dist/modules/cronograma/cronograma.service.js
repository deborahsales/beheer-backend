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
exports.CronogramaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CronogramaService = class CronogramaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, gestorId) {
        const demandas = dto.demandasCronograma?.length
            ? await this.prisma.demanda.findMany({
                where: {
                    id: { in: dto.demandasCronograma },
                },
                select: { id: true },
            })
            : [];
        const demandasIds = demandas.map((u) => u.id);
        return this.prisma.cronograma.create({
            data: {
                ...dto,
                gestorUsuarioId: gestorId,
                demandasCronograma: demandasIds.length
                    ? {
                        connect: demandasIds.map((id) => ({ id })),
                    }
                    : undefined,
            },
        });
    }
    findAll(gestorId) {
        return this.prisma.cronograma.findMany({ where: { gestorUsuarioId: gestorId } });
    }
    async findOne(cronogramaId, gestorId) {
        const cronograma = await this.prisma.cronograma.findFirst({
            where: { id: cronogramaId, gestorUsuarioId: gestorId },
            include: { demandasCronograma: true },
        });
        if (!cronograma)
            throw new common_1.NotFoundException('Cronograma não encontrado ou acesso não autorizado');
        return cronograma;
    }
    async update(dto, cronogramaId, gestorId) {
        await this.findOne(cronogramaId, gestorId);
        this.prisma.cronograma.update({
            where: { id: cronogramaId },
            data: { titulo: dto.titulo, descricao: dto.descricao },
        });
        if (dto.demandasCronograma) {
            const demandasValidas = await this.prisma.demanda.findMany({
                where: {
                    id: { in: dto.demandasCronograma },
                },
                select: { id: true },
            });
            const novasDemandas = demandasValidas.map((d) => d.id);
            const demandasAtuais = await this.prisma.demanda.findMany({
                where: { cronogramaId: cronogramaId },
            });
            const idsAtuais = demandasAtuais
                .map((d) => d.cronogramaId)
                .filter((id) => id !== null);
            const remover = idsAtuais.filter((id) => !novasDemandas.includes(id));
            const adicionar = novasDemandas.filter((id) => !idsAtuais.includes(id));
            if (remover.length) {
                await this.prisma.cronograma.update({
                    where: { id: cronogramaId },
                    data: {
                        demandasCronograma: {
                            disconnect: remover.map((id) => ({ id: id })),
                        },
                    },
                });
            }
            if (adicionar.length) {
                await this.prisma.cronograma.update({
                    where: { id: cronogramaId },
                    data: {
                        demandasCronograma: {
                            connect: adicionar.map((id) => ({ id: id })),
                        },
                    },
                });
            }
        }
        return this.prisma.cronograma.findFirst({ where: { id: cronogramaId } });
    }
    async remove(cronogramaId, gestorId) {
        await this.findOne(cronogramaId, gestorId);
        return this.prisma.cronograma.delete({ where: { id: cronogramaId } });
    }
};
exports.CronogramaService = CronogramaService;
exports.CronogramaService = CronogramaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CronogramaService);
//# sourceMappingURL=cronograma.service.js.map