import { serviceSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class CreateServiceDto extends createZodDto(serviceSchema) {}
