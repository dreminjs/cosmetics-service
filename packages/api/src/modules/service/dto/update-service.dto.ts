import { serviceSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export const updateServiceSchema = serviceSchema.partial();

export class UpdateServiceDto extends createZodDto(updateServiceSchema) {}
