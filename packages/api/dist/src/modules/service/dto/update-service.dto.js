"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceDto = exports.updateServiceSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const create_service_dto_1 = require("./create-service.dto");
exports.updateServiceSchema = create_service_dto_1.createServiceSchema.partial();
class UpdateServiceDto extends (0, nestjs_zod_1.createZodDto)(exports.updateServiceSchema) {
}
exports.UpdateServiceDto = UpdateServiceDto;
//# sourceMappingURL=update-service.dto.js.map