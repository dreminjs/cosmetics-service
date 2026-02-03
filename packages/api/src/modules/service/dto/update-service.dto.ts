import { updateServiceSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class UpdateServiceDto extends createZodDto(updateServiceSchema) {}
