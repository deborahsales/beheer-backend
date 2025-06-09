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
exports.ComentarioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const comentario_service_1 = require("./comentario.service");
const create_comentario_dto_1 = require("./dto/create-comentario.dto");
const update_comentario_dto_1 = require("./dto/update-comentario.dto");
const comentario_entity_1 = require("./entities/comentario.entity");
let ComentarioController = class ComentarioController {
    comentarioService;
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    create(createComentarioDto, req) {
        const usuarioId = req.user['id'];
        return this.comentarioService.create(createComentarioDto, usuarioId);
    }
    findAll(demandaId, req) {
        const usuarioId = req.user['id'];
        return this.comentarioService.findAll(demandaId, usuarioId);
    }
    findOne(comentarioId) {
        return this.comentarioService.findOne(comentarioId);
    }
    update(comentarioId, updateComentarioDto, req) {
        const usuarioId = req.user['id'];
        return this.comentarioService.update(updateComentarioDto, comentarioId, usuarioId);
    }
    delete(comentarioId, req) {
        const usuarioId = req.user['id'];
        return this.comentarioService.remove(comentarioId, usuarioId);
    }
};
exports.ComentarioController = ComentarioController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR, prisma_1.FuncaoUsuario.COLABORADOR),
    (0, swagger_1.ApiResponse)({ status: 201, type: comentario_entity_1.ComentarioEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comentario_dto_1.CreateComentarioDto, Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/demanda/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: comentario_entity_1.ComentarioEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: comentario_entity_1.ComentarioEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: comentario_entity_1.ComentarioEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_comentario_dto_1.UpdateComentarioDto, Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "delete", null);
exports.ComentarioController = ComentarioController = __decorate([
    (0, swagger_1.ApiTags)('comentario'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('comentario'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
//# sourceMappingURL=comentario.controller.js.map