"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssinaturaModule = void 0;
const common_1 = require("@nestjs/common");
const assinatura_controller_1 = require("./assinatura.controller");
const assinatura_service_1 = require("./assinatura.service");
let AssinaturaModule = class AssinaturaModule {
};
exports.AssinaturaModule = AssinaturaModule;
exports.AssinaturaModule = AssinaturaModule = __decorate([
    (0, common_1.Module)({
        controllers: [assinatura_controller_1.AssinaturaController],
        providers: [assinatura_service_1.AssinaturaService]
    })
], AssinaturaModule);
//# sourceMappingURL=assinatura.module.js.map