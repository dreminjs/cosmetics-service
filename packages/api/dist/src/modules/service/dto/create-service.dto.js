"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceDto = exports.createServiceSchema = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
exports.createServiceSchema = types_1.serviceSchema.omit({
    id: true,
});
class CreateServiceDto extends (0, nestjs_zod_1.createZodDto)(exports.createServiceSchema) {
}
exports.CreateServiceDto = CreateServiceDto;
//# sourceMappingURL=create-service.dto.js.map