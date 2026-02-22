import { TPrivateUser } from '@cosmetic-services/types';
export declare const CurrentUser: <K extends keyof TPrivateUser>(...dataOrPipes: (K | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | undefined)[]) => ParameterDecorator;
