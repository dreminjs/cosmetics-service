import { Controller, Get, Param, Query } from '@nestjs/common';
import { Service } from 'generated/prisma/client';
import { ServiceService } from './service.service';
import {
  ServiceCreateInput,
  ServiceUpdateArgs,
} from 'generated/prisma/models/Service';
import { FindServiceQueryParamsDto } from './dto/find-services.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Service | null> {
    return await this.serviceService.findOneById(id);
  }

  @Get()
  async findAll(@Query() dto: FindServiceQueryParamsDto): Promise<any> {
    const servicesQuery = this.serviceService.findMany({
      where: {
        ...(dto.title ? { title: { contains: dto.title } } : {}),
      },
      skip: dto.skip,
      take: dto.take,
    });
    const countQuery = this.serviceService.count({
      where: {
        ...(dto.title ? { title: { contains: dto.title } } : {}),
      },
    });

    const [services, count] = await Promise.all([servicesQuery, countQuery]);
    return { services, count };
  }

  async createOne(data: ServiceCreateInput): Promise<Service> {
    return await this.serviceService.createOne({ data: data });
  }

  async updateOne(id: string, args: ServiceUpdateArgs): Promise<Service> {
    return await this.serviceService.updateOne(id, args);
  }

  async deleteOne(id: string): Promise<Service | null> {
    return await this.serviceService.deleteOne(id);
  }
}
