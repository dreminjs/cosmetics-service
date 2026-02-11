import { Prisma, Booking } from 'generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class BookingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOne(args: Prisma.BookingCreateArgs): Promise<Booking>;
    findMany(args: Prisma.BookingFindManyArgs): Promise<Booking[]>;
    updateOne(args: Prisma.BookingUpdateArgs): Promise<Booking>;
    deleteOne(args: Prisma.BookingDeleteArgs): Promise<Booking>;
    count(args: Prisma.BookingCountArgs): Promise<number>;
}
