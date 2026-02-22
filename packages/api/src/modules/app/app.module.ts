import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from '../auth';
import { MasterModule } from '../master/master.module';
import { ServiceModule } from '../service/service.module';
import { TokenModule } from '../token/token.module';
import { MinioModule } from '../minio/minio.module';
import { UserModule } from '../user/user.module';
import { UserRoleModule } from '../user-role';
import { ConfigModule } from '@nestjs/config';
import { UserAdminModule } from '../user-admin/user-admin.module';

@Module({
  imports: [
    UserAdminModule,
    AuthModule,
    MasterModule,
    ServiceModule,
    TokenModule,
    MinioModule,
    UserModule,
    UserRoleModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
