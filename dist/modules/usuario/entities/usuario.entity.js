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
exports.UsuarioEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../../generated/prisma/index.js");
class UsuarioEntity {
    id;
    cpf;
    nome;
    email;
    telefone;
    dataNascimento;
    dataAdmissao;
    dataDesligamento;
    cargo;
    funcao;
}
exports.UsuarioEntity = UsuarioEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "dataNascimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "dataAdmissao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "dataDesligamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "cargo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: prisma_1.FuncaoUsuario }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "funcao", void 0);
//# sourceMappingURL=usuario.entity.js.map