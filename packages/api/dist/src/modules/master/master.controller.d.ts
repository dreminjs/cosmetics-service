import { CreateMasterDto } from './dto/create-master.dto';
import { MasterService } from './master.service';
import { Master } from 'generated/prisma/browser';
import { MinioService } from '../minio/minio.service';
import { UpdateMasterDto } from './dto/update-master.dto';
import { FindManyMasterDto } from './dto/find-masters.dto';
import { IWithPagination } from '@cosmetic-services/types';
export declare class MasterController {
    private readonly masterService;
    private readonly minioService;
    constructor(masterService: MasterService, minioService: MinioService);
    createMaster(dto: CreateMasterDto, files: Record<string, Storage.MultipartFile[]>): Promise<Master>;
    updateMaster(dto: UpdateMasterDto, id: string, files?: Record<string, Storage.MultipartFile[]>): Promise<Master>;
    findMany(dto: FindManyMasterDto): Promise<IWithPagination<Master>>;
}
