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
exports.AtestadoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const atestado_service_1 = require("./atestado.service");
const create_atestado_dto_1 = require("./dto/create-atestado.dto");
const update_atestado_dto_1 = require("./dto/update-atestado.dto");
const update_gerenciamento_atestado_1 = require("./dto/update-gerenciamento-atestado");
const atestado_entity_dto_1 = require("./entities/atestado.entity.dto");
let AtestadoController = class AtestadoController {
    atestadoService;
    constructor(atestadoService) {
        this.atestadoService = atestadoService;
    }
    create(createAtestadoDto, req) {
        const usuarioId = req.user['id'];
        return this.atestadoService.create(createAtestadoDto, usuarioId);
    }
    findAll(req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.atestadoService.findAll(funcaoUsuario, usuarioId);
    }
    findOne(id, req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.atestadoService.findOne(id, funcaoUsuario, usuarioId);
    }
    update(id, updateAtestadoDto, req) {
        const usuarioId = req.user['id'];
        return this.atestadoService.update(updateAtestadoDto, id, usuarioId);
    }
    updateRh(id, UpdateAtestadoDto, req) {
        const usuarioId = req.user['id'];
        return this.atestadoService.updateRh(UpdateAtestadoDto, id, usuarioId);
    }
    delete(id, req) {
        const usuarioId = req.user['id'];
        return this.atestadoService.remove(id, usuarioId);
    }
};
exports.AtestadoController = AtestadoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 201, type: atestado_entity_dto_1.AtestadoEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_atestado_dto_1.CreateAtestadoDto, Object]),
    __metadata("design:returntype", void 0)
], AtestadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [atestado_entity_dto_1.AtestadoEntity] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AtestadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: atestado_entity_dto_1.AtestadoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AtestadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: atestado_entity_dto_1.AtestadoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_atestado_dto_1.UpdateAtestadoDto, Object]),
    __metadata("design:returntype", void 0)
], AtestadoController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/gerenciamento/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.RH),
    (0, swagger_1.ApiResponse)({ status: 200, type: atestado_entity_dto_1.AtestadoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_gerenciamento_atestado_1.UpdateGerenciamentoAtestadoDto, Object]),
    __metadata("design:returntype", void 0)
], AtestadoController.prototype, "updateRh", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AtestadoController.prototype, "delete", null);
exports.AtestadoController = AtestadoController = __decorate([
    (0, swagger_1.ApiTags)('atestado'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('atestado'),
    __metadata("design:paramtypes", [atestado_service_1.AtestadoService])
], AtestadoController);
//# sourceMappingURL=atestado.controller.js.map