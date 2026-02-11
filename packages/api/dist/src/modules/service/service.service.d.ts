import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';
export declare class ServiceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOne(dto: Prisma.ServiceCreateArgs): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        duration: number;
        previewImage: string;
    }>;
    updateOne(id: string, dto: Prisma.ServiceUpdateArgs): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        duration: number;
        previewImage: string;
    }>;
    deleteOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        duration: number;
        previewImage: string;
    }>;
    findOneById(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        duration: number;
        previewImage: string;
    } | null>;
    findMany(dto: Prisma.ServiceFindManyArgs): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        duration: number;
        previewImage: string;
    }[]>;
    count(args?: Prisma.ServiceCountArgs): Promise<number>;
}
