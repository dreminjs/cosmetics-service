import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { MasterModule } from '../master/master.module';
import { ServiceModule } from '../service/service.module';
import { TokenModule } from '../token/token.module';
import { MinioModule } from '../minio/minio.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    AuthModule,
    MasterModule,
    ServiceModule,
    TokenModule,
    MinioModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
