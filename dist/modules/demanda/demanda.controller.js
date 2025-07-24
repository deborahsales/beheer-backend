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
exports.DemandaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const demanda_service_1 = require("./demanda.service");
const create_demanda_dto_1 = require("./dto/create-demanda.dto");
const filter_demanda_dto_1 = require("./dto/filter-demanda.dto");
const update_demanda_dto_1 = require("./dto/update-demanda.dto");
const demanda_entity_1 = require("./entitities/demanda.entity");
let DemandaController = class DemandaController {
    demandaService;
    constructor(demandaService) {
        this.demandaService = demandaService;
    }
    create(createDemandaDto, req) {
        const gestorId = req.user['id'];
        return this.demandaService.create(createDemandaDto, gestorId);
    }
    findAll(filterDemandasDto, req) {
        const usuarioId = req.user['id'];
        return this.demandaService.findAll(usuarioId, filterDemandasDto);
    }
    findAllByUser(filterDemandasDto, userId) {
        return this.demandaService.findAll(userId, filterDemandasDto);
    }
    findAllByGroup(filterDemandasDto, groupId) {
        return this.demandaService.findAllByGroup(groupId, filterDemandasDto);
    }
    findAllByTimeline(filterDemandasDto, timelineId) {
        return this.demandaService.findAllByTimeline(timelineId, filterDemandasDto);
    }
    findOne(id) {
        return this.demandaService.findOne(id);
    }
    update(id, updateDemandaDto, req) {
        const gestorId = req.user['id'];
        return this.demandaService.update(id, updateDemandaDto, gestorId);
    }
    updateStatus(id, updateDemandaDto, req) {
        const usuarioId = req.user['id'];
        return this.demandaService.updateStatus(id, updateDemandaDto, usuarioId);
    }
    delete(id, req) {
        const gestorId = req.user['id'];
        return this.demandaService.remove(id, gestorId);
    }
};
exports.DemandaController = DemandaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 201, type: demanda_entity_1.DemandaEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_demanda_dto_1.CreateDemandaDto, Object]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [demanda_entity_1.DemandaEntity] }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_demanda_dto_1.FilterDemandasDto, Object]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/usuario/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: demanda_entity_1.DemandaEntity }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_demanda_dto_1.FilterDemandasDto, Number]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "findAllByUser", null);
__decorate([
    (0, common_1.Get)('/grupo/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: demanda_entity_1.DemandaEntity }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_demanda_dto_1.FilterDemandasDto, Number]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "findAllByGroup", null);
__decorate([
    (0, common_1.Get)('/cronograma/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: demanda_entity_1.DemandaEntity }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_demanda_dto_1.FilterDemandasDto, Number]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "findAllByTimeline", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: demanda_entity_1.DemandaEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.GESTOR),
    (0, swagger_1.ApiResponse)({ status: 200, type: demanda_entity_1.DemandaEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_demanda_dto_1.UpdateDemandaDto, Object]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/status/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: demanda_entity_1.DemandaEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_demanda_dto_1.UpdateDemandaDto, Object]),
    __metadata("design:returntype", void 0)
], DemandaController.prototype, "updateStatus", null);
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
], DemandaController.prototype, "delete", null);
exports.DemandaController = DemandaController = __decorate([
    (0, swagger_1.ApiTags)('demanda'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('demanda'),
    __metadata("design:paramtypes", [demanda_service_1.DemandaService])
], DemandaController);
//# sourceMappingURL=demanda.controller.js.map