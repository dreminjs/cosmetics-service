"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceDto = exports.updateServiceSchema = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
exports.updateServiceSchema = types_1.serviceSchema.partial();
class UpdateServiceDto extends (0, nestjs_zod_1.createZodDto)(exports.updateServiceSchema) {
}
exports.UpdateServiceDto = UpdateServiceDto;
//# sourceMappingURL=update-service.dto.js.map