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
exports.GrupoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const create_grupo_dto_1 = require("./dto/create-grupo.dto");
const update_grupo_dto_1 = require("./dto/update-grupo.dto");
const grupo_entity_1 = require("./entities/grupo.entity");
const grupo_service_1 = require("./grupo.service");
let GrupoController = class GrupoController {
    grupoService;
    constructor(grupoService) {
        this.grupoService = grupoService;
    }
    create(createGrupoDto, req) {
        const gestorId = req.user['id'];
        return this.grupoService.create(createGrupoDto, gestorId);
    }
    findAll(req) {
        const usuarioId = req.user['id'];
        return this.grupoService.findAll(usuarioId);
    }
    findAllByUser(id) {
        return this.grupoService.findAll(id);
    }
    findOne(id, req) {
        const usuarioId = req.user['id'];
        return this.grupoService.findOne(id, usuarioId);
    }
    update(id, updateGrupoDto, req) {
        const gestorId = req.user['id'];
        return this.grupoService.update(id, updateGrupoDto, gestorId);
    }
    delete(id, req) {
        const gestorId = req.user['id'];
        return this.grupoService.remove(id, gestorId);
    }
};
exports.GrupoController = GrupoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 201, type: grupo_entity_1.GrupoEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupo_dto_1.CreateGrupoDto, Object]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [grupo_entity_1.GrupoEntity] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/usuario/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: grupo_entity_1.GrupoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "findAllByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: grupo_entity_1.GrupoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 200, type: grupo_entity_1.GrupoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_grupo_dto_1.UpdateGrupoDto, Object]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "delete", null);
exports.GrupoController = GrupoController = __decorate([
    (0, swagger_1.ApiTags)('grupo'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('grupo'),
    __metadata("design:paramtypes", [grupo_service_1.GrupoService])
], GrupoController);
//# sourceMappingURL=grupo.controller.js.map