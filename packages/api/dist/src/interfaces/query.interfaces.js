"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyQuery = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class FindManyQuery extends (0, nestjs_zod_1.createZodDto)(types_1.paginationQuerySchema) {
}
exports.FindManyQuery = FindManyQuery;
//# sourceMappingURL=query.interfaces.js.map