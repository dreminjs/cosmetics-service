import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOne(args: Prisma.ServiceCreateArgs): Promise<{
        id: string;
        description: string;
        previewImage: string;
        title: string;
        price: number;
        duration: number;
    }>;
    updateOne(id: string, dto: UpdateServiceDto): Promise<{
        id: string;
        description: string;
        previewImage: string;
        title: string;
        price: number;
        duration: number;
    }>;
    deleteOne(id: string): Promise<{
        id: string;
        description: string;
        previewImage: string;
        title: string;
        price: number;
        duration: number;
    }>;
    findOneById(id: string): Promise<{
        id: string;
        description: string;
        previewImage: string;
        title: string;
        price: number;
        duration: number;
    } | null>;
    findMany(dto: Prisma.ServiceFindManyArgs): Promise<{
        id: string;
        description: string;
        previewImage: string;
        title: string;
        price: number;
        duration: number;
    }[]>;
    count(args?: Prisma.ServiceCountArgs): Promise<number>;
}
