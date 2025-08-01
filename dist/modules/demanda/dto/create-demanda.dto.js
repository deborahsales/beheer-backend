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
exports.CreateDemandaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../../generated/prisma/index.js");
class CreateDemandaDto {
    titulo;
    descricao;
    prazo;
    status;
    prioridade;
    cronogramaId;
    usuariosDemanda;
    gruposDemanda;
}
exports.CreateDemandaDto = CreateDemandaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Demanda 1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDemandaDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Descricao da demanda 1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDemandaDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'date-time' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateDemandaDto.prototype, "prazo", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.StatusDemanda),
    (0, swagger_1.ApiPropertyOptional)({
        enum: prisma_1.StatusDemanda,
        example: prisma_1.StatusDemanda.CRIADA,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDemandaDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.PrioridadeDemanda),
    (0, swagger_1.ApiProperty)({
        enum: prisma_1.PrioridadeDemanda,
        example: prisma_1.PrioridadeDemanda.BAIXA,
    }),
    __metadata("design:type", String)
], CreateDemandaDto.prototype, "prioridade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Number, example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateDemandaDto.prototype, "cronogramaId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number], example: [2, 3] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateDemandaDto.prototype, "usuariosDemanda", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number], example: [2, 3] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateDemandaDto.prototype, "gruposDemanda", void 0);
//# sourceMappingURL=create-demanda.dto.js.map