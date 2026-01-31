"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMasterDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class CreateMasterDto extends (0, nestjs_zod_1.createZodDto)(types_1.hireMasterFormSchema) {
}
exports.CreateMasterDto = CreateMasterDto;
//# sourceMappingURL=create-master.dto.js.map