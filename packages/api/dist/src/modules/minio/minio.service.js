"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MinioService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinioService = void 0;
const common_1 = require("@nestjs/common");
const minio_1 = require("minio");
let MinioService = MinioService_1 = class MinioService {
    client = new minio_1.Client({
        accessKey: process.env.MINIO_ACCESS_KEY,
        secretKey: process.env.MINIO_SECRET_KEY,
        endPoint: process.env.MINIO_ENDPOINT || 'localhost',
        port: 9000,
        useSSL: false,
    });
    bucket = process.env.MINIO_BUCKET || 'index';
    logger = new common_1.Logger(MinioService_1.name);
    async upload(file) {
        const fileName = crypto.randomUUID() + file.fieldname;
        const ext = file.filename.substring(file.filename.lastIndexOf('.'), file.filename.length);
        await this.client.putObject(this.bucket, `${fileName}${ext}`, file.buffer);
        return `${fileName}${ext}`;
    }
};
exports.MinioService = MinioService;
exports.MinioService = MinioService = MinioService_1 = __decorate([
    (0, common_1.Injectable)()
], MinioService);
//# sourceMappingURL=minio.service.js.map