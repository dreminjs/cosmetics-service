import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { MasterService } from './master.service';
import { Master } from 'generated/prisma/browser';
import { Files } from 'src/decorators/file.decorator';
import { MultipartInterceptor } from 'src/interceptors/multipart.interceptor';
import { MinioService } from '../minio/minio.service';
import { UpdateMasterDto } from './dto/update-master.dto';
import { FindManyMasterDto } from './dto/find-masters.dto';
import { IWithPagination } from '@cosmetic-services/types';

@Controller('master')
export class MasterController {
  constructor(
    private readonly masterService: MasterService,
    private readonly minioService: MinioService,
  ) {}

  @UseInterceptors(
    MultipartInterceptor({ fileType: 'jpeg', maxFileSize: 1000_000 }),
  )
  @Post()
  async createMaster(
    @Body() dto: CreateMasterDto,
    @Files() files: Record<string, Storage.MultipartFile[]>,
  ): Promise<Master> {
    const fileName = await this.minioService.upload(files.file[0]);

    return this.masterService.create({
      previewImage: fileName,
      name: dto.name,
      description: dto.description,
    });
  }

  @UseInterceptors(
    MultipartInterceptor({ fileType: 'jpeg', maxFileSize: 1000_000 }),
  )
  @Patch(':id')
  async updateMaster(
    @Body() dto: UpdateMasterDto,
    @Param('id') id: string,
    @Files() files?: Record<string, Storage.MultipartFile[]>,
  ): Promise<Master> {
    let fileName = dto.oldPreviewImage;

    if (dto.previewImage && dto.oldPreviewImage && files?.file?.[0]) {
      fileName = await this.minioService.upload(files.file[0]);

      await this.minioService.delete(dto.oldPreviewImage);
    }

    return this.masterService.update(id, {
      previewImage: fileName,
      name: dto.name,
      description: dto.description,
    });
  }

  @Get()
  async findMany(
    @Query() dto: FindManyMasterDto,
  ): Promise<IWithPagination<Master>> {
    const masters = await this.masterService.findAll({
      where: {
        ...(dto.serviceId
          ? { masterServices: { some: { serviceId: dto.serviceId } } }
          : {}),
      },
    });

    const count = await this.masterService.count({
      where: {
        ...(dto.serviceId
          ? { masterServices: { some: { serviceId: dto.serviceId } } }
          : {}),
      },
    });

    return { items: masters, total: count };
  }
}
