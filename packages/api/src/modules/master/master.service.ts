import { Injectable } from '@nestjs/common';
import { Master, Prisma } from 'generated/prisma/browser';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MasterService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: Prisma.MasterCreateInput): Promise<Master> {
    return await this.prisma.master.create({
      data: dto,
    });
  }

  async findMany(args: Prisma.MasterFindManyArgs): Promise<Master[]> {
    return await this.prisma.master.findMany(args);
  }

  async findOne(id: string): Promise<Master | null> {
    return await this.prisma.master.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: Prisma.MasterUpdateInput): Promise<Master> {
    return await this.prisma.master.update({
      where: { id },
      data: dto,
    });
  }

  async count(args: Prisma.MasterCountArgs): Promise<number> {
    return await this.prisma.master.count(args);
  }

  async findOneById(id: string): Promise<Master | null> {
    return await this.prisma.master.findUnique({
      where: { id },
    });
  }
}
