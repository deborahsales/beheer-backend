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
exports.CreateAvisoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAvisoDto {
    assunto;
    conteudo;
    avisoUsuario;
    gruposAviso;
}
exports.CreateAvisoDto = CreateAvisoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Aviso' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAvisoDto.prototype, "assunto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Conteudo do aviso' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAvisoDto.prototype, "conteudo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number], example: [2, 3] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateAvisoDto.prototype, "avisoUsuario", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [Number], example: [2, 3] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateAvisoDto.prototype, "gruposAviso", void 0);
//# sourceMappingURL=create-aviso.dto.js.map