"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignUserRoleDto = void 0;
const types_1 = require("@cosmetic-services/types");
const nestjs_zod_1 = require("nestjs-zod");
class AssignUserRoleDto extends (0, nestjs_zod_1.createZodDto)(types_1.assignUserRoleSchema) {
}
exports.AssignUserRoleDto = AssignUserRoleDto;
//# sourceMappingURL=create.dto.js.map