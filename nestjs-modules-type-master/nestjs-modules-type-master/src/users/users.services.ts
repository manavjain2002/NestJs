import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@Inject('DB') private readonly dbname: string) {}
}
