import { serviceSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export const createServiceSchema = serviceSchema.omit({
  id: true,
});

export class CreateServiceDto extends createZodDto(createServiceSchema) {}
