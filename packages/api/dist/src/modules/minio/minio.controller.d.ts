import { MinioService } from './minio.service';
export declare class MinioController {
    private readonly minioService;
    constructor(minioService: MinioService);
    index(files: Record<string, Storage.MultipartFile[]>): Promise<string>;
}
