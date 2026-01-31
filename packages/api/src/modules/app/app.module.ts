import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { MasterModule } from '../master/master.module';

@Module({
  imports: [AuthModule, MasterModule],
  controllers: [AppController],
})
export class AppModule {}
