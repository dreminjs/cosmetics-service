import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TCreateTimeSlot, TUpdateTimeSlot } from '@cosmetic-services/types';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class TimeSlotService {
  constructor(private readonly prisma: PrismaService) {}

  async createOne(data: TCreateTimeSlot) {
    return this.prisma.timeSlot.create({ data });
  }

  async updateOne(id: string, data: TUpdateTimeSlot) {
    return this.prisma.timeSlot.update({ where: { id: data.id }, data });
  }

  async deleteOne(id: string) {
    return this.prisma.timeSlot.delete({ where: { id } });
  }

  async findMany(args: Prisma.TimeSlotFindManyArgs = {}) {
    return this.prisma.timeSlot.findMany(args);
  }
}
