import { updateOneTimeSlotSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class UpdateTimeSlotDto extends createZodDto(updateOneTimeSlotSchema) {}
