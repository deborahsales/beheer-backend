"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGrupoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_grupo_dto_1 = require("./create-grupo.dto");
class UpdateGrupoDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_grupo_dto_1.CreateGrupoDto, ['usuarios'])) {
}
exports.UpdateGrupoDto = UpdateGrupoDto;
//# sourceMappingURL=update-grupo.dto.js.map