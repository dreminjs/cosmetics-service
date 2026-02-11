"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookingDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class UpdateBookingDto extends (0, nestjs_zod_1.createZodDto)(types_1.updateBookingSchema) {
}
exports.UpdateBookingDto = UpdateBookingDto;
//# sourceMappingURL=update.dto.js.map