import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(dto: Prisma.ServiceCreateArgs) {
    return await this.prisma.service.create(dto);
  }

  public async updateOne(id: string, dto: Prisma.ServiceUpdateArgs) {
    return await this.prisma.service.update({
      where: { id },
      data: dto,
    });
  }

  public async deleteOne(id: string) {
    return await this.prisma.service.delete({ where: { id } });
  }

  public async findOneById(id: string) {
    return await this.prisma.service.findUnique({ where: { id } });
  }

  public async findMany(dto: Prisma.ServiceFindManyArgs) {
    return await this.prisma.service.findMany(dto);
  }

  public async count(args: Prisma.ServiceCountArgs = {}) {
    return await this.prisma.service.count(args);
  }
}
