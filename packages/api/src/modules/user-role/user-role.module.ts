import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserRoleService],
  exports: [UserRoleService],
})
export class UserRoleModule {}
