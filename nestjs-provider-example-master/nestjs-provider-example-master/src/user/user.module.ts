import { Module } from '@nestjs/common';
import { UserDataService } from './userdata.services';
import { UserController } from './user.controller';
import { UserService } from './user.services';

@Module({
  controllers: [UserController],
  providers: [UserService, UserDataService],
  exports: [],
})
export class UserModule {
  constructor() {
    console.log('UserModule');
  }
}
