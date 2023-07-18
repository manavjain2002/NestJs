import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ServiceOne } from './1.service';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     // console.log('1');
//     return 'Hello World!';
//   }
// }

// @Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => ServiceOne))
    private readonly serviceOne: ServiceOne,
  ) {
    console.log("🚀 ~ file: app.service.ts:18 ~ AppService ~ serviceOne:", serviceOne)
    }
  getHello(): string {
    // console.log('1');
    return 'Hello World!';
  }
}
