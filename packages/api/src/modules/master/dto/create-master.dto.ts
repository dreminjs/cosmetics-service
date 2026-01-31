import { hireMasterFormSchema } from '@cosmetic-services/types';

import { createZodDto } from 'nestjs-zod';

export class CreateMasterDto extends createZodDto(hireMasterFormSchema) {}
