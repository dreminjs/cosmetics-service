import { Service } from 'generated/prisma/client';
import { ServiceService } from './service.service';
import { FindServiceQueryParamsDto } from './dto/find-services.dto';
import { IWithPagination } from '@cosmetic-services/types';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { MinioService } from '../minio/minio.service';
export declare class ServiceController {
    private readonly serviceService;
    private readonly minioService;
    constructor(serviceService: ServiceService, minioService: MinioService);
    findOneById(id: string): Promise<Service | null>;
    findAll(dto: FindServiceQueryParamsDto): Promise<IWithPagination<Service>>;
    createOne(dto: CreateServiceDto, files: Record<string, Storage.MultipartFile[]>): Promise<Service>;
    updateOne(id: string, dto: UpdateServiceDto): Promise<Service>;
    deleteOne(id: string): Promise<Service | null>;
}
