import { updateMasterFormSchema } from '@cosmetic-services/types';

import { createZodDto } from 'nestjs-zod';

export class UpdateMasterDto extends createZodDto(updateMasterFormSchema) {}
