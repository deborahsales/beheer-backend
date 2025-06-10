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
exports.PontoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PontoService = class PontoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto, usuarioId, ip) {
        if (!ip?.trim())
            throw new common_1.NotFoundException('Endereço ip não identificado');
        return this.prisma.ponto.create({
            data: {
                ...dto,
                usuarioId,
                ip,
            },
        });
    }
    findAll(usuarioId) {
        return this.prisma.ponto.findMany({ where: { usuarioId } });
    }
    async findOne(id) {
        const ponto = await this.prisma.ponto.findFirst({ where: { id } });
        if (!ponto)
            throw new common_1.NotFoundException('Ponto não encontrado');
        return ponto;
    }
    async findOneWithUser(id, usuarioId) {
        const ponto = await this.prisma.ponto.findFirst({ where: { id, usuarioId } });
        if (!ponto)
            throw new common_1.NotFoundException('Ponto não encontrado ou acesso não autorizado');
        return ponto;
    }
    async update(dto, id) {
        await this.findOne(id);
        return this.prisma.ponto.update({ where: { id }, data: { ...dto } });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.ponto.delete({ where: { id } });
    }
};
exports.PontoService = PontoService;
exports.PontoService = PontoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PontoService);
//# sourceMappingURL=ponto.service.js.map