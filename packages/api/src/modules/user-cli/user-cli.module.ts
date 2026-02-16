import { Module } from '@nestjs/common';
import { CreateOwnerCommand } from './create-owner.command';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [CreateOwnerCommand, PrismaService],
})
export class UserCliModule {}
