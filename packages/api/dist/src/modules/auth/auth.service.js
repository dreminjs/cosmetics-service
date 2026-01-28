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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("../token/token.service");
const user_service_1 = require("../user/user.service");
const bcrypt_1 = require("bcrypt");
let AuthService = class AuthService {
    userService;
    tokenService;
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async register(dto, res) {
        const hashedPassword = await (0, bcrypt_1.hash)(dto.password, 10);
        const user = await this.userService.createOne({
            name: dto.name,
            hashedPassword: hashedPassword,
        });
        return this.tokenService.generateTokens({
            userId: user.id,
        }, res);
    }
    async login(dto, res) {
        const user = await this.userService.findOne({
            where: {
                name: dto.name,
            },
        });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = await (0, bcrypt_1.compare)(dto.password, user?.hashedPassword);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        return this.tokenService.generateTokens({
            userId: user?.id,
        }, res);
    }
    async logout(userId) {
        await this.tokenService.deleteRefreshToken({ userId });
    }
    async validateUser(email, password) {
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map