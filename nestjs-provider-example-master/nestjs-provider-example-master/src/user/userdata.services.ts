import { Inject, Injectable } from '@nestjs/common';
import { UserService } from './user.services';

@Injectable()
export class UserDataService {
  constructor(private userService: UserService) {
    console.log(
      '🚀 ~ file: userdata.services.ts:5 ~ UserDataService ~ userService:',
      userService,
    );
  }
}
