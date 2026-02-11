import { BookingService } from './booking.service';
import { Booking } from 'generated/prisma/browser';
import { PaginationQueryParamsDto } from 'src/dto/pagination-query-params.dto';
import { IWithPagination } from '@cosmetic-services/types';
import { CreateBookingDto } from './dto/create.dto';
import { UpdateBookingDto } from './dto/update.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    findMany(query: PaginationQueryParamsDto, userId: string): Promise<IWithPagination<Booking>>;
    createOne(dto: CreateBookingDto, userId: string): Promise<Booking>;
    updateOne(dto: UpdateBookingDto, id: string): Promise<Booking>;
    deleteOne(id: string): Promise<void>;
}
