"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoDigitalModule = void 0;
const common_1 = require("@nestjs/common");
const certificado_digital_controller_1 = require("./certificado-digital.controller");
const certificado_digital_service_1 = require("./certificado-digital.service");
let CertificadoDigitalModule = class CertificadoDigitalModule {
};
exports.CertificadoDigitalModule = CertificadoDigitalModule;
exports.CertificadoDigitalModule = CertificadoDigitalModule = __decorate([
    (0, common_1.Module)({
        controllers: [certificado_digital_controller_1.CertificadoDigitalController],
        providers: [certificado_digital_service_1.CertificadoDigitalService]
    })
], CertificadoDigitalModule);
//# sourceMappingURL=certificado-digital.module.js.map