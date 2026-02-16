import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { MinioModule } from '../minio';

@Module({
  imports: [MinioModule],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
