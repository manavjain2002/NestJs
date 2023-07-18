import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class Guard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
  validateRequest(request: Request): boolean {
    if (request.headers['user-agent'].includes('Chrome')) {
    // if (request.headers['user-agent'].includes('Postman')) {
      return true;
    }
    return false;
  }
}
