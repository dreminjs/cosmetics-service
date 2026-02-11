"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindServiceQueryParamsDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class FindServiceQueryParamsDto extends (0, nestjs_zod_1.createZodDto)(types_1.findManyServicesQueryParamsSchema) {
}
exports.FindServiceQueryParamsDto = FindServiceQueryParamsDto;
//# sourceMappingURL=find-services.dto.js.map