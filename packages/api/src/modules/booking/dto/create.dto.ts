import { createBookingSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class CreateBookingDto extends createZodDto(createBookingSchema) {}
