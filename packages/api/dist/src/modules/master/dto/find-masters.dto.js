"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMasterDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class FindManyMasterDto extends (0, nestjs_zod_1.createZodDto)(types_1.findManyMasterQueryParamsSchema) {
}
exports.FindManyMasterDto = FindManyMasterDto;
//# sourceMappingURL=find-masters.dto.js.map