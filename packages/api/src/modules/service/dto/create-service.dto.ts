import { createServiceSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class CreateServiceDto extends createZodDto(createServiceSchema) {}
