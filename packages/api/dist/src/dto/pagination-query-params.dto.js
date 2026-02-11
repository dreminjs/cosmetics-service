"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationQueryParamsDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class PaginationQueryParamsDto extends (0, nestjs_zod_1.createZodDto)(types_1.paginationQuerySchema) {
}
exports.PaginationQueryParamsDto = PaginationQueryParamsDto;
//# sourceMappingURL=pagination-query-params.dto.js.map