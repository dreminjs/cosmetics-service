import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from 'generated/prisma/browser';
import { PaginationQueryParamsDto } from 'src/dto/pagination-query-params.dto';
import { CurrentUser } from '../user/user.decorator';
import { AccessTokenGuard } from '../token/guards/access-token.guard';
import { IWithPagination } from '@cosmetic-services/types';
import { CreateBookingDto } from './dto/create.dto';
import { UpdateBookingDto } from './dto/update.dto';

@UseGuards(AccessTokenGuard)
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  public async findMany(
    @Query() query: PaginationQueryParamsDto,
    @CurrentUser('id') userId: string,
  ): Promise<IWithPagination<Booking>> {
    const countQuery = this.bookingService.count({ where: { userId } });

    const itemsQuery = this.bookingService.findMany({
      where: {
        userId,
      },
      skip: query.skip,
      take: query.take,
    });

    const [count, items] = await Promise.all([countQuery, itemsQuery]);

    return {
      total: count,
      items,
    };
  }

  @Post()
  public async createOne(
    @Body() dto: CreateBookingDto,
    @CurrentUser('id') userId: string,
  ): Promise<Booking> {
    return await this.bookingService.createOne({ data: { ...dto, userId } });
  }

  @Put(':id')
  public async updateOne(
    @Body() dto: UpdateBookingDto,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Booking> {
    return await this.bookingService.updateOne({
      where: { id },
      data: dto,
    });
  }

  @Delete(':id')
  public async deleteOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void> {
    await this.bookingService.deleteOne({
      where: { id },
    });
  }
}
