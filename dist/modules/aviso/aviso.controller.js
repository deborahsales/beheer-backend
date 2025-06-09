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
exports.AvisoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const aviso_service_1 = require("./aviso.service");
const create_aviso_dto_1 = require("./dto/create-aviso.dto");
const update_aviso_dto_1 = require("./dto/update-aviso.dto");
const aviso_entity_1 = require("./entities/aviso.entity");
let AvisoController = class AvisoController {
    avisoService;
    constructor(avisoService) {
        this.avisoService = avisoService;
    }
    create(createAvisoDto, req) {
        const usuarioId = req.user['id'];
        return this.avisoService.create(createAvisoDto, usuarioId);
    }
    findAll(req) {
        const usuarioId = req.user['id'];
        return this.avisoService.findAll(usuarioId);
    }
    findOne(avisoId, req) {
        const usuarioId = req.user['id'];
        return this.avisoService.findOne(avisoId, usuarioId);
    }
    updateLido(avisoId, req) {
        const usuarioId = req.user['id'];
        return this.avisoService.updateLido(avisoId, usuarioId);
    }
    update(avisoId, updateAvisoDto, req) {
        const gestorId = req.user['id'];
        return this.avisoService.update(updateAvisoDto, avisoId, gestorId);
    }
    delete(avisoId, req) {
        const usuarioId = req.user['id'];
        return this.avisoService.remove(avisoId, usuarioId);
    }
};
exports.AvisoController = AvisoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR, prisma_1.FuncaoUsuario.RH, prisma_1.FuncaoUsuario.ADMINISTRADOR),
    (0, swagger_1.ApiResponse)({ status: 201, type: aviso_entity_1.AvisoEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aviso_dto_1.CreateAvisoDto, Object]),
    __metadata("design:returntype", void 0)
], AvisoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [aviso_entity_1.AvisoEntity] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AvisoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: aviso_entity_1.AvisoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AvisoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/lido/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: aviso_entity_1.AvisoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AvisoController.prototype, "updateLido", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR, prisma_1.FuncaoUsuario.RH, prisma_1.FuncaoUsuario.ADMINISTRADOR),
    (0, swagger_1.ApiResponse)({ status: 200, type: aviso_entity_1.AvisoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_aviso_dto_1.UpdateAvisoDto, Object]),
    __metadata("design:returntype", void 0)
], AvisoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR, prisma_1.FuncaoUsuario.RH, prisma_1.FuncaoUsuario.ADMINISTRADOR),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AvisoController.prototype, "delete", null);
exports.AvisoController = AvisoController = __decorate([
    (0, swagger_1.ApiTags)('aviso'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('aviso'),
    __metadata("design:paramtypes", [aviso_service_1.AvisoService])
], AvisoController);
//# sourceMappingURL=aviso.controller.js.map