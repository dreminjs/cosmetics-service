"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class CreateServiceDto extends (0, nestjs_zod_1.createZodDto)(types_1.serviceSchema) {
}
exports.CreateServiceDto = CreateServiceDto;
//# sourceMappingURL=create-service.dto.js.map