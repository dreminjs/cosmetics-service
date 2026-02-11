"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookingDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class CreateBookingDto extends (0, nestjs_zod_1.createZodDto)(types_1.createBookingSchema) {
}
exports.CreateBookingDto = CreateBookingDto;
//# sourceMappingURL=create.dto.js.map