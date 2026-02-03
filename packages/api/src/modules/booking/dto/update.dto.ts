import { updateBookingSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class UpdateBookingDto extends createZodDto(updateBookingSchema) {}
