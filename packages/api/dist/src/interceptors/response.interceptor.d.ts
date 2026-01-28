import { IAPIResponse } from '@cosmetic-services/types';
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ResponseInterceptor<T> implements NestInterceptor<T, IAPIResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<IAPIResponse<T>>;
}
