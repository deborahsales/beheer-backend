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
exports.CronogramaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const cronograma_service_1 = require("./cronograma.service");
const create_cronograma_dto_1 = require("./dto/create-cronograma.dto");
const update_cronograma_dto_1 = require("./dto/update-cronograma.dto");
const cronograma_entity_1 = require("./entities/cronograma.entity");
let CronogramaController = class CronogramaController {
    cronogramaService;
    constructor(cronogramaService) {
        this.cronogramaService = cronogramaService;
    }
    create(createCronogramaDto, req) {
        const usuarioId = req.user['id'];
        return this.cronogramaService.create(createCronogramaDto, usuarioId);
    }
    findAll(req) {
        const usuarioId = req.user['id'];
        return this.cronogramaService.findAll(usuarioId);
    }
    findOne(cronogramaId, req) {
        const usuarioId = req.user['id'];
        return this.cronogramaService.findOne(cronogramaId, usuarioId);
    }
    update(cronogramaId, updateCronogramaDto, req) {
        const usuarioId = req.user['id'];
        return this.cronogramaService.update(updateCronogramaDto, cronogramaId, usuarioId);
    }
    delete(cronogramaId, req) {
        const gestorId = req.user['id'];
        return this.cronogramaService.remove(cronogramaId, gestorId);
    }
};
exports.CronogramaController = CronogramaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 201, type: cronograma_entity_1.CronogramaEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cronograma_dto_1.CreateCronogramaDto, Object]),
    __metadata("design:returntype", void 0)
], CronogramaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 200, type: [cronograma_entity_1.CronogramaEntity] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CronogramaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 200, type: cronograma_entity_1.CronogramaEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CronogramaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 200, type: cronograma_entity_1.CronogramaEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cronograma_dto_1.UpdateCronogramaDto, Object]),
    __metadata("design:returntype", void 0)
], CronogramaController.prototype, "update", null);
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
], CronogramaController.prototype, "delete", null);
exports.CronogramaController = CronogramaController = __decorate([
    (0, swagger_1.ApiTags)('cronograma'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('cronograma'),
    __metadata("design:paramtypes", [cronograma_service_1.CronogramaService])
], CronogramaController);
//# sourceMappingURL=cronograma.controller.js.map