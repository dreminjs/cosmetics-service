"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninDto = exports.SignupDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class SignupDto extends (0, nestjs_zod_1.createZodDto)(types_1.SignupDtoSchema) {
}
exports.SignupDto = SignupDto;
class SigninDto extends (0, nestjs_zod_1.createZodDto)(types_1.SigninDtoSchema) {
}
exports.SigninDto = SigninDto;
//# sourceMappingURL=auth.dto.js.map