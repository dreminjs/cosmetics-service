import { TimeSlotService } from './time-slot.service';
import { CreateTimeSlotDto } from './dto/create.dto';
import { UpdateTimeSlotDto } from './dto/update.dto';
import { FindManyTimeSlotDto } from './dto/find.dto';
import { TimeSlot } from 'generated/prisma/client';
export declare class TimeSlotController {
    private readonly timeSlotService;
    constructor(timeSlotService: TimeSlotService);
    createOne(data: CreateTimeSlotDto): Promise<{
        id: string;
        masterId: string;
        date: Date;
        startTime: string;
        endTime: string;
    }>;
    updateOne(id: string, data: UpdateTimeSlotDto): Promise<{
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
    findMany(query: FindManyTimeSlotDto): Promise<TimeSlot[]>;
}
