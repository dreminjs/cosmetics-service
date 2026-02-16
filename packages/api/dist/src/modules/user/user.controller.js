"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_decorator_1 = require("./user.decorator");
const access_token_guard_1 = require("../token/guards/access-token.guard");
const client_1 = require("../../../generated/prisma/client");
const user_role_1 = require("../user-role");
const roles_decorator_1 = require("../user-role/roles.decorator");
const update_dto_1 = require("./dto/update.dto");
let UserController = class UserController {
    userService;
    userRoleService;
    constructor(userService, userRoleService) {
        this.userService = userService;
        this.userRoleService = userRoleService;
    }
    async findMe(id) {
        return await this.userService.findPublicOne(id);
    }
    async updateUserRole(userId, dto) {
        return await this.userRoleService.createOne(userId, dto.role);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findMe", null);
__decorate([
    (0, roles_decorator_1.AllowedRoles)(client_1.Role.OWNER),
    (0, common_1.Patch)('/:userId/role'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.AssignUserRoleDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserRole", null);
exports.UserController = UserController = __decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        user_role_1.UserRoleService])
], UserController);
//# sourceMappingURL=user.controller.js.map