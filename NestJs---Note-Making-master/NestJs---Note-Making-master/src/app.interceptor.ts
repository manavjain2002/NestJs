import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { decrypt, encrypt } from './utils/encrypt-decrypt';

@Injectable()
export class Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    req.body.note = encrypt(req.body.note);
    return next.handle().pipe(
      tap((data) => {
        // console.log(data)
        data.note = decrypt(data.note);
      }),
    );
  }
}
