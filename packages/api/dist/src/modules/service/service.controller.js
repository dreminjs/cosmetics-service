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
const update_service_dto_1 = require("./dto/update-service.dto");
const create_service_dto_1 = require("./dto/create-service.dto");
const multipart_interceptor_1 = require("../../interceptors/multipart.interceptor");
const file_decorator_1 = require("../../decorators/file.decorator");
const minio_service_1 = require("../minio/minio.service");
let ServiceController = class ServiceController {
    serviceService;
    minioService;
    constructor(serviceService, minioService) {
        this.serviceService = serviceService;
        this.minioService = minioService;
    }
    async findOneById(id) {
        return await this.serviceService.findOneById(id);
    }
    async findAll(dto) {
        const where = {
            ...(dto.title ? { title: { contains: dto.title } } : {}),
        };
        const itemsQuery = this.serviceService.findMany({
            where,
            skip: dto.skip,
            take: dto.take,
        });
        const countQuery = this.serviceService.count({
            where,
        });
        const [services, count] = await Promise.all([itemsQuery, countQuery]);
        return { items: services, total: count };
    }
    async createOne(dto, files) {
        const fileName = await this.minioService.upload(files.file[0]);
        return await this.serviceService.createOne({
            data: {
                ...dto,
                previewImage: fileName,
            },
        });
    }
    async updateOne(id, dto) {
        return await this.serviceService.updateOne(id, dto);
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
__decorate([
    (0, common_1.UseInterceptors)((0, multipart_interceptor_1.MultipartInterceptor)({ fileType: 'jpeg', maxFileSize: 1000_000 })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, file_decorator_1.Files)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_dto_1.CreateServiceDto, Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "createOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "deleteOne", null);
exports.ServiceController = ServiceController = __decorate([
    (0, common_1.Controller)('service'),
    __metadata("design:paramtypes", [service_service_1.ServiceService,
        minio_service_1.MinioService])
], ServiceController);
//# sourceMappingURL=service.controller.js.map