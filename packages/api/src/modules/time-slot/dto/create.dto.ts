import { createTimeSlotSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class CreateTimeSlotDto extends createZodDto(createTimeSlotSchema) {}
