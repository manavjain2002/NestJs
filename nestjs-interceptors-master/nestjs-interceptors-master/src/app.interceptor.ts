import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class MyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    req['RequestType'] = 'Checking';
    return next.handle().pipe(
      tap((data) => {
        data.response = {
          original_message: data.message,
          intercepted_message: 'Intercepted',
        };
      }),
    );
  }
}
