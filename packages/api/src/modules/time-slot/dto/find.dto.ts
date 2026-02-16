import { findManyTimeSlotSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class FindManyTimeSlotDto extends createZodDto(findManyTimeSlotSchema) {}
