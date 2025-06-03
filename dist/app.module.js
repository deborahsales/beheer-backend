"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_module_1 = require("./modules/usuario/usuario.module");
const demanda_module_1 = require("./modules/demanda/demanda.module");
const cronograma_module_1 = require("./modules/cronograma/cronograma.module");
const aviso_module_1 = require("./modules/aviso/aviso.module");
const grupo_module_1 = require("./modules/grupo/grupo.module");
const comentario_module_1 = require("./modules/comentario/comentario.module");
const localizacao_module_1 = require("./modules/localizacao/localizacao.module");
const ponto_module_1 = require("./modules/ponto/ponto.module");
const prestacao_contas_module_1 = require("./modules/prestacao-contas/prestacao-contas.module");
const atestado_module_1 = require("./modules/atestado/atestado.module");
const assinatura_module_1 = require("./modules/assinatura/assinatura.module");
const certificado_digital_module_1 = require("./modules/certificado-digital/certificado-digital.module");
const documento_module_1 = require("./modules/documento/documento.module");
const ajuste_ponto_module_1 = require("./modules/ajuste-ponto/ajuste-ponto.module");
const auth_module_1 = require("./modules/auth/auth.module");
const prisma_module_1 = require("./modules/prisma/prisma.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuario_module_1.UsuarioModule,
            demanda_module_1.DemandaModule,
            cronograma_module_1.CronogramaModule,
            aviso_module_1.AvisoModule,
            grupo_module_1.GrupoModule,
            comentario_module_1.ComentarioModule,
            localizacao_module_1.LocalizacaoModule,
            ponto_module_1.PontoModule,
            prestacao_contas_module_1.PrestacaoContasModule,
            atestado_module_1.AtestadoModule,
            assinatura_module_1.AssinaturaModule,
            certificado_digital_module_1.CertificadoDigitalModule,
            documento_module_1.DocumentoModule,
            ajuste_ponto_module_1.AjustePontoModule,
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map