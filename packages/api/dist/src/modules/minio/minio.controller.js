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
exports.MinioController = void 0;
const common_1 = require("@nestjs/common");
const file_decorator_1 = require("../../decorators/file.decorator");
const multipart_interceptor_1 = require("../../interceptors/multipart.interceptor");
const minio_service_1 = require("./minio.service");
const swagger_1 = require("@nestjs/swagger");
let MinioController = class MinioController {
    minioService;
    constructor(minioService) {
        this.minioService = minioService;
    }
    async index(files) {
        return await this.minioService.upload(files.file[0]);
    }
};
exports.MinioController = MinioController;
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Файл (опционально)',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, multipart_interceptor_1.MultipartInterceptor)({ fileType: 'jpeg', maxFileSize: 1000_000 })),
    (0, common_1.Post)(),
    __param(0, (0, file_decorator_1.Files)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MinioController.prototype, "index", null);
exports.MinioController = MinioController = __decorate([
    (0, common_1.Controller)('minio'),
    __metadata("design:paramtypes", [minio_service_1.MinioService])
], MinioController);
//# sourceMappingURL=minio.controller.js.map