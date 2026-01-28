"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class AuthDto extends (0, nestjs_zod_1.createZodDto)(types_1.AuthDtoSchema) {
}
exports.AuthDto = AuthDto;
//# sourceMappingURL=auth.dto.js.map