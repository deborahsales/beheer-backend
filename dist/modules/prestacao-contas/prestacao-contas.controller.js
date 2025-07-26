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
exports.PrestacaoContasController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
const multer_1 = require("multer");
const path_1 = require("path");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const create_prstacao_contas_dto_1 = require("./dto/create-prstacao-contas.dto");
const update_gerenciamento_prestacao_dto_1 = require("./dto/update-gerenciamento-prestacao.dto");
const update_prestacao_contas_dto_1 = require("./dto/update-prestacao-contas.dto");
const prestacao_contas_entity_1 = require("./entities/prestacao-contas.entity");
const prestacao_contas_service_1 = require("./prestacao-contas.service");
let PrestacaoContasController = class PrestacaoContasController {
    prestacaoContasService;
    constructor(prestacaoContasService) {
        this.prestacaoContasService = prestacaoContasService;
    }
    create(dto, imagem, req) {
        const usuarioId = req.user['id'];
        return this.prestacaoContasService.create({
            ...dto,
            imagem: imagem.filename,
        }, usuarioId);
    }
    findAll(req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.prestacaoContasService.findAll(funcaoUsuario, usuarioId);
    }
    findOne(id, req) {
        const usuarioId = req.user['id'];
        const funcaoUsuario = req.user['funcao'];
        return this.prestacaoContasService.findOne(id, funcaoUsuario, usuarioId);
    }
    update(id, updatePrestacaoDto, req) {
        const usuarioId = req.user['id'];
        return this.prestacaoContasService.update(updatePrestacaoDto, id, usuarioId);
    }
    updateRh(id, UpdatePrestacaoDto, req) {
        const usuarioId = req.user['id'];
        return this.prestacaoContasService.updateRh(UpdatePrestacaoDto, id, usuarioId);
    }
    delete(id, req) {
        const usuarioId = req.user['id'];
        return this.prestacaoContasService.remove(id, usuarioId);
    }
};
exports.PrestacaoContasController = PrestacaoContasController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagem', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/prestacoes',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, uniqueSuffix + (0, path_1.extname)(file.originalname));
            },
        }),
        limits: { fileSize: 10 * 1024 * 1024 },
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                descricao: { type: 'string' },
                data: { type: 'string', format: 'date-time' },
                valor: { type: 'number' },
                imagem: { type: 'string', format: 'binary' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, type: prestacao_contas_entity_1.PrestacaoContasEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prstacao_contas_dto_1.CreatePrestacaoContasDto, Object, Object]),
    __metadata("design:returntype", void 0)
], PrestacaoContasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: [prestacao_contas_entity_1.PrestacaoContasEntity] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PrestacaoContasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: prestacao_contas_entity_1.PrestacaoContasEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PrestacaoContasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 200, type: prestacao_contas_entity_1.PrestacaoContasEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_prestacao_contas_dto_1.UpdatePrestacaoContasDto, Object]),
    __metadata("design:returntype", void 0)
], PrestacaoContasController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/gerenciamento/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, role_decorator_1.Role)(prisma_1.FuncaoUsuario.RH),
    (0, swagger_1.ApiResponse)({ status: 200, type: prestacao_contas_entity_1.PrestacaoContasEntity }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_gerenciamento_prestacao_dto_1.UpdateGerenciamentoPrestacaoDto, Object]),
    __metadata("design:returntype", void 0)
], PrestacaoContasController.prototype, "updateRh", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PrestacaoContasController.prototype, "delete", null);
exports.PrestacaoContasController = PrestacaoContasController = __decorate([
    (0, swagger_1.ApiTags)('prestacao-contas'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('prestacao-contas'),
    __metadata("design:paramtypes", [prestacao_contas_service_1.PrestacaoContasService])
], PrestacaoContasController);
//# sourceMappingURL=prestacao-contas.controller.js.map