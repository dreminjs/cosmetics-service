import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { Service } from 'generated/prisma/client';
import { ServiceService } from './service.service';
import { ServiceWhereInput } from 'generated/prisma/models/Service';
import { FindServiceQueryParamsDto } from './dto/find-services.dto';
import { IWithPagination } from '@cosmetic-services/types';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { MultipartInterceptor } from 'src/interceptors/multipart.interceptor';
import { Files } from 'src/decorators/file.decorator';
import { MinioService } from '../minio/minio.service';

@Controller('service')
export class ServiceController {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly minioService: MinioService,
  ) {}

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Service | null> {
    return await this.serviceService.findOneById(id);
  }

  @Get()
  async findAll(
    @Query() dto: FindServiceQueryParamsDto,
  ): Promise<IWithPagination<Service>> {
    const where: ServiceWhereInput = {
      ...(dto.title ? { title: { contains: dto.title } } : {}),
    };

    const itemsQuery = this.serviceService.findMany({
      where,
      skip: dto.skip,
      take: dto.take,
    });
    const countQuery = this.serviceService.count({
      where,
    });

    const [services, count] = await Promise.all([itemsQuery, countQuery]);
    return { items: services, total: count };
  }

  @UseInterceptors(
    MultipartInterceptor({ fileType: 'jpeg', maxFileSize: 1000_000 }),
  )
  @Post()
  async createOne(
    @Body() dto: CreateServiceDto,
    @Files() files: Record<string, Storage.MultipartFile[]>,
  ): Promise<Service> {
    const fileName = await this.minioService.upload(files.file[0]);

    return await this.serviceService.createOne({
      data: {
        ...dto,
        previewImage: fileName,
      },
    });
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() dto: UpdateServiceDto,
  ): Promise<Service> {
    return await this.serviceService.updateOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<Service | null> {
    return await this.serviceService.deleteOne(id);
  }
}
