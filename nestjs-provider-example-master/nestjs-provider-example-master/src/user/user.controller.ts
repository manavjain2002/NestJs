import { Controller } from '@nestjs/common';
import { UserService } from './user.services';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {
    console.log('UserController');
  }
}
