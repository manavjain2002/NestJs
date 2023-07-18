import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.services';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }

@Injectable()
export class AppService {
  constructor(private userService: UserService) {
    console.log(
      '🚀 ~ file: app.service.ts:5 ~ AppService ~ userService:',
      userService,
    );
  }
  getHello(): string {
    return this.userService.getUser();
  }
}
