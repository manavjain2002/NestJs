import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor() {
    console.log('Userservice');
  }

  getUser(): string {
    return 'User service called';
  }
}
