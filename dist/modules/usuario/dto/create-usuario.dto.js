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
exports.CreateUsuarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../../generated/prisma/index.js");
class CreateUsuarioDto {
    cpf;
    nome;
    email;
    senha;
    telefone;
    dataNascimento;
    dataAdmissao;
    dataDesligamento;
    cargo;
    funcao;
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: '12345678900' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Jane Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'janedoe@email.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: '123456' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "senha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: '79999654387' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'date-time' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateUsuarioDto.prototype, "dataNascimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'date-time' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateUsuarioDto.prototype, "dataAdmissao", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ type: String, format: 'date-time' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateUsuarioDto.prototype, "dataDesligamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Analista' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "cargo", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.FuncaoUsuario),
    (0, swagger_1.ApiProperty)({
        enum: prisma_1.FuncaoUsuario,
        example: prisma_1.FuncaoUsuario.COLABORADOR,
    }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "funcao", void 0);
//# sourceMappingURL=create-usuario.dto.js.map