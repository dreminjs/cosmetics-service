import { SigninDtoSchema, SignupDtoSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class SignupDto extends createZodDto(SignupDtoSchema) {}

export class SigninDto extends createZodDto(SigninDtoSchema) {}
