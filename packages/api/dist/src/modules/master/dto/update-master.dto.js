"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMasterDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class UpdateMasterDto extends (0, nestjs_zod_1.createZodDto)(types_1.updateMasterFormSchema) {
}
exports.UpdateMasterDto = UpdateMasterDto;
//# sourceMappingURL=update-master.dto.js.map