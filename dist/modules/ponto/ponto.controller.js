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
exports.PontoController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const cloudinary_storage_1 = require("../../common/cloudinary/cloudinary.storage");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const create_ponto_dto_1 = require("./dto/create-ponto.dto");
const update_ponto_dto_1 = require("./dto/update-ponto.dto");
const ponto_entity_1 = require("./entities/ponto.entity");
const ponto_service_1 = require("./ponto.service");
let PontoController = class PontoController {
    pontoService;
    constructor(pontoService) {
        this.pontoService = pontoService;
    }
    create(dto, imagem, req) {
        const usuarioId = req.user['id'];
        const ip = req.ip || '';
        return this.pontoService.create({
            ...dto,
            imagem: imagem.path,
        }, usuarioId, ip);
    }
    findAll(req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.pontoService.findAll(funcaoUsuario, usuarioId);
    }
    findOne(id, req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.pontoService.findOne(id, funcaoUsuario, usuarioId);
    }
    update(id, updatePontoDto) {
        return this.pontoService.update(updatePontoDto, id);
    }
    delete(id) {
        return this.pontoService.remove(id);
    }
};
exports.PontoController = PontoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagem', {
        storage: cloudinary_storage_1.storage,
        limits: { fileSize: 10 * 1024 * 1024 },
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                latitude: { type: 'number' },
                longitude: { type: 'number' },
                imagem: { type: 'string', format: 'binary' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, type: ponto_entity_1.PontoEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ponto_dto_1.CreatePontoDto, Object, Object]),
    __metadata("design:returntype", void 0)
], PontoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [ponto_entity_1.PontoEntity] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PontoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: ponto_entity_1.PontoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PontoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.RH),
    (0, swagger_1.ApiResponse)({ status: 200, type: ponto_entity_1.PontoEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_ponto_dto_1.UpdatePontoDto]),
    __metadata("design:returntype", void 0)
], PontoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.RH),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PontoController.prototype, "delete", null);
exports.PontoController = PontoController = __decorate([
    (0, swagger_1.ApiTags)('ponto'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('ponto'),
    __metadata("design:paramtypes", [ponto_service_1.PontoService])
], PontoController);
//# sourceMappingURL=ponto.controller.js.map