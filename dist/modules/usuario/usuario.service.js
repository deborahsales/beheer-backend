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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let UsuarioService = class UsuarioService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const hashedPassword = await bcrypt.hash(dto.senha, 10);
        const usuario = await this.prisma.usuario.create({
            data: {
                ...dto,
                senha: hashedPassword,
            },
        });
        const { senha, ...result } = usuario;
        return result;
    }
    findAll() {
        return this.prisma.usuario.findMany({
            select: {
                id: true,
                cpf: true,
                nome: true,
                email: true,
                telefone: true,
                dataNascimento: true,
                dataAdmissao: true,
                dataDesligamento: true,
                cargo: true,
                funcao: true,
            },
        });
    }
    async findOne(id) {
        const usuario = await this.prisma.usuario.findUnique({ where: { id: Number(id) } });
        if (!usuario)
            throw new common_1.NotFoundException('Usuário não encontrado');
        const { senha, ...result } = usuario;
        return result;
    }
    async findByEmail(email) {
        const usuario = await this.prisma.usuario.findUnique({ where: { email } });
        if (!usuario)
            throw new common_1.NotFoundException('Usuário não encontrado');
        return usuario;
    }
    async update(id, dto) {
        const data = { ...dto };
        if (dto.senha) {
            data.senha = await bcrypt.hash(dto.senha, 10);
        }
        const updated = await this.prisma.usuario.update({ where: { id: Number(id) }, data });
        const { senha, ...result } = updated;
        return result;
    }
    async remove(id) {
        const usuario = await this.findOne(Number(id));
        if (!usuario)
            throw new common_1.NotFoundException('Usuário não encontrado ou acesso não autorizado');
        await this.prisma.usuario.delete({ where: { id: Number(id) } });
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map