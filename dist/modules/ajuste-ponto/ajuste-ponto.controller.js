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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AjustePontoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const ajuste_ponto_service_1 = require("./ajuste-ponto.service");
const create_ajuste_ponto_dto_1 = require("./dto/create-ajuste-ponto.dto");
const update_ajuste_ponto_dto_1 = require("./dto/update-ajuste-ponto.dto");
const ajuste_ponto_entity_1 = require("./entities/ajuste-ponto.entity");
const update_gerenciamento_ajuste_dto_1 = require("./dto/update-gerenciamento-ajuste.dto");
let AjustePontoController = class AjustePontoController {
    ajustePontoService;
    constructor(ajustePontoService) {
        this.ajustePontoService = ajustePontoService;
    }
    create(pontoId, createAjustePontoDto, req) {
        const usuarioId = req.user['id'];
        return this.ajustePontoService.create(createAjustePontoDto, pontoId, usuarioId);
    }
    findAll(req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.ajustePontoService.findAll(funcaoUsuario, usuarioId);
    }
    findOne(id, req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.ajustePontoService.findOne(id, funcaoUsuario, usuarioId);
    }
    update(id, updateAjustePontoDto, req) {
        const usuarioId = req.user['id'];
        return this.ajustePontoService.update(updateAjustePontoDto, id, usuarioId);
    }
    updateRh(id, updateAjustePontoDto, req) {
        const usuarioId = req.user['id'];
        return this.ajustePontoService.updateRh(updateAjustePontoDto, id, usuarioId);
    }
    delete(id, req) {
        const usuarioId = req.user['id'];
        return this.ajustePontoService.remove(id, usuarioId);
    }
};
exports.AjustePontoController = AjustePontoController;
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 201, type: ajuste_ponto_entity_1.AjustePontoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_ajuste_ponto_dto_1.CreateAjustePontoDto, Object]),
    __metadata("design:returntype", void 0)
], AjustePontoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [ajuste_ponto_entity_1.AjustePontoEntity] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AjustePontoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: ajuste_ponto_entity_1.AjustePontoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AjustePontoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: ajuste_ponto_entity_1.AjustePontoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_ajuste_ponto_dto_1.UpdateAjustePontoDto, Object]),
    __metadata("design:returntype", void 0)
], AjustePontoController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/gerenciamento/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.RH),
    (0, swagger_1.ApiResponse)({ status: 200, type: ajuste_ponto_entity_1.AjustePontoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_gerenciamento_ajuste_dto_1.UpdateGerenciamentoPontoDto, Object]),
    __metadata("design:returntype", void 0)
], AjustePontoController.prototype, "updateRh", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AjustePontoController.prototype, "delete", null);
exports.AjustePontoController = AjustePontoController = __decorate([
    (0, swagger_1.ApiTags)('ajuste-ponto'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('ajuste-ponto'),
    __metadata("design:paramtypes", [ajuste_ponto_service_1.AjustePontoService])
], AjustePontoController);
//# sourceMappingURL=ajuste-ponto.controller.js.map