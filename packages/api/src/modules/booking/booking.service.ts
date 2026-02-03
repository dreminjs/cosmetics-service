import { Injectable } from '@nestjs/common';
import { Prisma, Booking } from 'generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(args: Prisma.BookingCreateArgs): Promise<Booking> {
    return await this.prisma.booking.create(args);
  }

  public async findMany(args: Prisma.BookingFindManyArgs): Promise<Booking[]> {
    return await this.prisma.booking.findMany(args);
  }

  public async updateOne(args: Prisma.BookingUpdateArgs): Promise<Booking> {
    return await this.prisma.booking.update(args);
  }

  public async deleteOne(args: Prisma.BookingDeleteArgs): Promise<Booking> {
    return await this.prisma.booking.delete(args);
  }

  public async count(args: Prisma.BookingCountArgs): Promise<number> {
    return await this.prisma.booking.count(args);
  }
}
