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
exports.UpdateDemandaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_demanda_dto_1 = require("./create-demanda.dto");
class UpdateDemandaDto extends (0, swagger_1.PartialType)(create_demanda_dto_1.CreateDemandaDto) {
    usuariosDemanda;
    gruposDemanda;
}
exports.UpdateDemandaDto = UpdateDemandaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], example: [1, 2] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateDemandaDto.prototype, "usuariosDemanda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], example: [1, 2] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateDemandaDto.prototype, "gruposDemanda", void 0);
//# sourceMappingURL=update-demanda.dto.js.map