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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const types_1 = require("@cosmetic-services/types");
let UserService = UserService_1 = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    logger = new common_1.Logger(UserService_1.name);
    async findOne(whereOptions) {
        return await this.prisma.user.findFirst({
            where: whereOptions,
        });
    }
    async findPublicOne(id) {
        const findedUser = await this.prisma.user.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                phone: true,
            },
        });
        return types_1.publicUserSchema.parse(findedUser);
    }
    async findPrivateOne(id) {
        const findedUser = await this.prisma.user.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                phone: true,
                role: {
                    select: {
                        role: true,
                    },
                },
            },
        });
        return types_1.privateUserSchema.parse(findedUser);
    }
    async createOne(dto) {
        return await this.prisma.user.create({
            data: { ...dto },
        });
    }
    async updateOne(id, dto) {
        return await this.prisma.user.update({
            where: {
                id,
            },
            data: { ...dto },
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map