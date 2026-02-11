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
  UseGuards,
} from '@nestjs/common';
import { TimeSlotService } from './time-slot.service';
import { CreateTimeSlotDto } from './dto/create.dto';
import { UpdateTimeSlotDto } from './dto/update.dto';
import { AllowedRoles, RolesGuard } from '../user-role';

@Controller('time-slot')
export class TimeSlotController {
  constructor(private readonly timeSlotService: TimeSlotService) {}

  @HttpCode(HttpStatus.CREATED)
  @AllowedRoles('MASTER')
  @UseGuards(RolesGuard)
  @Post()
  async createOne(@Body() data: CreateTimeSlotDto) {
    return this.timeSlotService.createOne(data);
  }

  @HttpCode(HttpStatus.CREATED)
  @AllowedRoles('MASTER')
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
  async findMany() {
    return this.timeSlotService.findMany();
  }
}
