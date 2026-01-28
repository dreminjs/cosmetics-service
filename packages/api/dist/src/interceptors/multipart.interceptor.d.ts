import { NestInterceptor, Type } from '@nestjs/common';
import { MultipartOptions } from 'src/models/options.model';
export declare function MultipartInterceptor(options?: MultipartOptions): Type<NestInterceptor>;
