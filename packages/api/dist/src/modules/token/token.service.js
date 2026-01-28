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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let TokenService = class TokenService {
    jwtService;
    prisma;
    configService;
    constructor(jwtService, prisma, configService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.configService = configService;
    }
    async deleteOne(args) {
        return await this.prisma.refreshToken.delete(args);
    }
    async generateTokens(payload, res) {
        const oldToken = await this.findOne({ userId: payload.userId });
        if (oldToken) {
            await this.deleteOne({
                where: {
                    userId: payload.userId,
                    token: oldToken.token,
                },
            });
        }
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '1d',
            secret: this.configService.get('ACCESS_TOKEN'),
        });
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '1w',
            secret: this.configService.get('REFRESH_TOKEN'),
        });
        await this.saveRefreshToken({
            user: {
                connect: {
                    id: payload.userId,
                },
            },
            token: refreshToken,
        });
        return this.buildTokensResponse({ accessToken, refreshToken }, res);
    }
    async validateToken(token) {
        return this.jwtService.verify(token);
    }
    async saveRefreshToken(payload) {
        return await this.prisma.refreshToken.create({ data: payload });
    }
    async findOne(where) {
        return await this.prisma.refreshToken.findFirst({
            where,
        });
    }
    async deleteRefreshToken(where) {
        return await this.prisma.refreshToken.delete({ where });
    }
    buildTokensResponse(dto, res) {
        res.setCookie('accessToken', dto.accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
        });
        res.setCookie('refreshToken', dto.refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
        });
        return {
            message: 'успешно!',
        };
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService,
        config_1.ConfigService])
], TokenService);
//# sourceMappingURL=token.service.js.map