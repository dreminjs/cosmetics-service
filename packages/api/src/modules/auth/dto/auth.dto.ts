import { AuthDtoSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class AuthDto extends createZodDto(AuthDtoSchema) {}
