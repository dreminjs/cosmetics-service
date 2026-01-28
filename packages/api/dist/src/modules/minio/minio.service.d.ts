export declare class MinioService {
    private readonly client;
    private readonly bucket;
    private readonly logger;
    upload(file: Storage.MultipartFile): Promise<string>;
}
