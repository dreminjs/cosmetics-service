import { Service } from 'generated/prisma/client';
import { ServiceService } from './service.service';
import { ServiceCreateInput, ServiceUpdateArgs } from 'generated/prisma/models/Service';
import { FindServiceQueryParamsDto } from './dto/find-services.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    findOneById(id: string): Promise<Service | null>;
    findAll(dto: FindServiceQueryParamsDto): Promise<any>;
    createOne(data: ServiceCreateInput): Promise<Service>;
    updateOne(id: string, args: ServiceUpdateArgs): Promise<Service>;
    deleteOne(id: string): Promise<Service | null>;
}
