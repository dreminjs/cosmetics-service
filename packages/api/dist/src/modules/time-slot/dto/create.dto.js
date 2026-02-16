"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTimeSlotDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class CreateTimeSlotDto extends (0, nestjs_zod_1.createZodDto)(types_1.createTimeSlotSchema) {
}
exports.CreateTimeSlotDto = CreateTimeSlotDto;
//# sourceMappingURL=create.dto.js.map