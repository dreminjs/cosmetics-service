import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(args: Prisma.ServiceCreateArgs) {
    return await this.prisma.service.create(args);
  }

  public async updateOne(id: string, dto: UpdateServiceDto) {
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
