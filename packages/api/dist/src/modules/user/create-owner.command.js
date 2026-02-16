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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOwnerCommand = void 0;
const nest_commander_1 = require("nest-commander");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const enums_1 = require("../../../generated/prisma/enums");
const bcrypt_1 = require("bcrypt");
let CreateOwnerCommand = class CreateOwnerCommand extends nest_commander_1.CommandRunner {
    userService;
    constructor(userService) {
        super();
        this.userService = userService;
    }
    async run(passedParams, options) {
        const phone = options?.phone || '+375214541190';
        const password = options?.password || 'Admin123!';
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        try {
            await this.userService.createOne({
                name: 'admin',
                phone,
                hashedPassword,
                role: {
                    create: {
                        role: enums_1.Role.OWNER,
                    },
                },
            });
        }
        catch (error) {
            console.error('❌ Failed to create super admin:', error);
        }
    }
    parsePhone(val) {
        return val;
    }
    parsePassword(val) {
        return val;
    }
};
exports.CreateOwnerCommand = CreateOwnerCommand;
__decorate([
    (0, nest_commander_1.Option)({
        flags: '-e, --phone <phone>',
        description: 'Admin phone',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CreateOwnerCommand.prototype, "parsePhone", null);
__decorate([
    (0, nest_commander_1.Option)({
        flags: '-p, --password <password>',
        description: 'Admin password',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CreateOwnerCommand.prototype, "parsePassword", null);
exports.CreateOwnerCommand = CreateOwnerCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'create owner',
        description: 'Create owner',
    }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], CreateOwnerCommand);
//# sourceMappingURL=create-owner.command.js.map