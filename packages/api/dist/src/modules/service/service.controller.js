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
exports.ServiceController = void 0;
const common_1 = require("@nestjs/common");
const service_service_1 = require("./service.service");
const find_services_dto_1 = require("./dto/find-services.dto");
let ServiceController = class ServiceController {
    serviceService;
    constructor(serviceService) {
        this.serviceService = serviceService;
    }
    async findOneById(id) {
        return await this.serviceService.findOneById(id);
    }
    async findAll(dto) {
        const servicesQuery = this.serviceService.findMany({
            where: {
                ...(dto.title ? { title: { contains: dto.title } } : {}),
            },
            skip: dto.skip,
            take: dto.take,
        });
        const countQuery = this.serviceService.count({
            where: {
                ...(dto.title ? { title: { contains: dto.title } } : {}),
            },
        });
        const [services, count] = await Promise.all([servicesQuery, countQuery]);
        return { services, count };
    }
    async createOne(data) {
        return await this.serviceService.createOne({ data: data });
    }
    async updateOne(id, args) {
        return await this.serviceService.updateOne(id, args);
    }
    async deleteOne(id) {
        return await this.serviceService.deleteOne(id);
    }
};
exports.ServiceController = ServiceController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_services_dto_1.FindServiceQueryParamsDto]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findAll", null);
exports.ServiceController = ServiceController = __decorate([
    (0, common_1.Controller)('service'),
    __metadata("design:paramtypes", [service_service_1.ServiceService])
], ServiceController);
//# sourceMappingURL=service.controller.js.map