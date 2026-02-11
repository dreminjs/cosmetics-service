"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowedRoles = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
const AllowedRoles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.AllowedRoles = AllowedRoles;
//# sourceMappingURL=roles.decorator.js.map