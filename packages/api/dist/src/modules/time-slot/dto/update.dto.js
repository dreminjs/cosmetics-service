"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimeSlotDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class UpdateTimeSlotDto extends (0, nestjs_zod_1.createZodDto)(types_1.updateOneTimeSlotSchema) {
}
exports.UpdateTimeSlotDto = UpdateTimeSlotDto;
//# sourceMappingURL=update.dto.js.map