import { PrismaService } from '../prisma/prisma.service';
import { TCreateTimeSlot, TUpdateTimeSlot } from '@cosmetic-services/types';
import { Prisma } from 'generated/prisma/client';
export declare class TimeSlotService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOne(data: TCreateTimeSlot): Promise<{
        id: string;
        masterId: string;
        date: Date;
        startTime: string;
        endTime: string;
    }>;
    updateOne(id: string, data: TUpdateTimeSlot): Promise<{
        id: string;
        masterId: string;
        date: Date;
        startTime: string;
        endTime: string;
    }>;
    deleteOne(id: string): Promise<{
        id: string;
        masterId: string;
        date: Date;
        startTime: string;
        endTime: string;
    }>;
    findMany(args?: Prisma.TimeSlotFindManyArgs): Promise<{
        id: string;
        masterId: string;
        date: Date;
        startTime: string;
        endTime: string;
    }[]>;
}
