import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MyMiddleWare implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    req['typeOfReq'] = 'Custom middleware checking Req';
    next();
  }
}
