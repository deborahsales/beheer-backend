"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComentarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_comentario_dto_1 = require("./create-comentario.dto");
class UpdateComentarioDto extends (0, swagger_1.PartialType)(create_comentario_dto_1.CreateComentarioDto) {
}
exports.UpdateComentarioDto = UpdateComentarioDto;
//# sourceMappingURL=update-comentario.dto.js.map