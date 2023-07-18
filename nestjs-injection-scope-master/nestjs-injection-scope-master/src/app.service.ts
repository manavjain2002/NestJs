import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.DEFAULT,
})
export class AppService {
  constructor() {
    console.log('AppService init');
  }
  getHello(): string {
    return 'Hello World! I am a bot';
  }
}

// @Injectable({
//   scope: Scope.REQUEST,
// })
// export class AppService {
//   constructor() {
//     console.log('AppService init');
//   }
//   getHello(): string {
//     return 'Hello World! I am a bot';
//   }
// }

// @Injectable({
//   scope: Scope.TRANSIENT,
// })
// export class AppService {
//   constructor() {
//     console.log('AppService init');
//   }
//   getHello(): string {
//     return 'Hello World! I am a bot';
//   }
// }
