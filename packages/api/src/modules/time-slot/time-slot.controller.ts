import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TimeSlotService } from './time-slot.service';
import { CreateTimeSlotDto } from './dto/create.dto';
import { UpdateTimeSlotDto } from './dto/update.dto';
import { AllowedRoles, RolesGuard } from '../user-role';
import { FindManyTimeSlotDto } from './dto/find.dto';
import { ROLES } from 'src/constants/roles';
import { TimeSlot } from 'generated/prisma/client';

@Controller('time-slot')
export class TimeSlotController {
  constructor(private readonly timeSlotService: TimeSlotService) {}

  @HttpCode(HttpStatus.CREATED)
  @AllowedRoles(ROLES.MASTER)
  @UseGuards(RolesGuard)
  @Post()
  async createOne(@Body() data: CreateTimeSlotDto) {
    return this.timeSlotService.createOne(data);
  }

  @HttpCode(HttpStatus.OK)
  @AllowedRoles(ROLES.MASTER)
  @UseGuards(RolesGuard)
  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() data: UpdateTimeSlotDto) {
    return this.timeSlotService.updateOne(id, data);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return this.timeSlotService.deleteOne(id);
  }

  @Get()
  async findMany(@Query() query: FindManyTimeSlotDto): Promise<TimeSlot[]> {
    return this.timeSlotService.findMany({
      where: {
        masterId: query.masterId,
        date: {
          lte: query.startDate,
          gte: query.endDate,
        },
      },
    });
  }
}
