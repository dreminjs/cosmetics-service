"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const token_controller_1 = require("./token.controller");
const token_service_1 = require("./token.service");
const prisma_module_1 = require("../prisma/prisma.module");
const access_token_strategy_1 = require("./strategies/access-token.strategy");
const refresh_token_strategy_1 = require("./strategies/refresh-token.strategy");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
let TokenModule = class TokenModule {
};
exports.TokenModule = TokenModule;
exports.TokenModule = TokenModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({}), prisma_module_1.PrismaModule, (0, common_1.forwardRef)(() => user_module_1.UserModule)],
        controllers: [token_controller_1.TokenController],
        providers: [token_service_1.TokenService, access_token_strategy_1.AccessTokenStrategy, refresh_token_strategy_1.RefreshTokenStrategy],
        exports: [token_service_1.TokenService, access_token_strategy_1.AccessTokenStrategy, refresh_token_strategy_1.RefreshTokenStrategy],
    })
], TokenModule);
//# sourceMappingURL=token.module.js.map