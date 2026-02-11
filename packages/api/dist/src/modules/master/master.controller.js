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
exports.MasterController = void 0;
const common_1 = require("@nestjs/common");
const create_master_dto_1 = require("./dto/create-master.dto");
const master_service_1 = require("./master.service");
const file_decorator_1 = require("../../decorators/file.decorator");
const multipart_interceptor_1 = require("../../interceptors/multipart.interceptor");
const minio_service_1 = require("../minio/minio.service");
const update_master_dto_1 = require("./dto/update-master.dto");
const find_masters_dto_1 = require("./dto/find-masters.dto");
let MasterController = class MasterController {
    masterService;
    minioService;
    constructor(masterService, minioService) {
        this.masterService = masterService;
        this.minioService = minioService;
    }
    async createMaster(dto, files) {
        const fileName = await this.minioService.upload(files.file[0]);
        return this.masterService.create({
            previewImage: fileName,
            name: dto.name,
            description: dto.description,
        });
    }
    async updateMaster(dto, id, files) {
        let fileName = dto.oldPreviewImage;
        if (dto.previewImage && dto.oldPreviewImage && files?.file?.[0]) {
            fileName = await this.minioService.upload(files.file[0]);
            await this.minioService.delete(dto.oldPreviewImage);
        }
        return this.masterService.update(id, {
            previewImage: fileName,
            name: dto.name,
            description: dto.description,
        });
    }
    async findMany(dto) {
        const whereOptions = {
            ...(dto.serviceId
                ? { masterServices: { some: { serviceId: dto.serviceId } } }
                : {}),
        };
        const mastersQuery = this.masterService.findMany({
            where: whereOptions,
        });
        const countQuery = this.masterService.count({
            where: whereOptions,
        });
        const [masters, count] = await Promise.all([mastersQuery, countQuery]);
        return { items: masters, total: count };
    }
};
exports.MasterController = MasterController;
__decorate([
    (0, common_1.UseInterceptors)((0, multipart_interceptor_1.MultipartInterceptor)({ fileType: 'jpeg', maxFileSize: 1000_000 })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, file_decorator_1.Files)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_master_dto_1.CreateMasterDto, Object]),
    __metadata("design:returntype", Promise)
], MasterController.prototype, "createMaster", null);
__decorate([
    (0, common_1.UseInterceptors)((0, multipart_interceptor_1.MultipartInterceptor)({ fileType: 'jpeg', maxFileSize: 1000_000 })),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, file_decorator_1.Files)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_master_dto_1.UpdateMasterDto, String, Object]),
    __metadata("design:returntype", Promise)
], MasterController.prototype, "updateMaster", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_masters_dto_1.FindManyMasterDto]),
    __metadata("design:returntype", Promise)
], MasterController.prototype, "findMany", null);
exports.MasterController = MasterController = __decorate([
    (0, common_1.Controller)('master'),
    __metadata("design:paramtypes", [master_service_1.MasterService,
        minio_service_1.MinioService])
], MasterController);
//# sourceMappingURL=master.controller.js.map