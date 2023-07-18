import { Global, Module } from '@nestjs/common';
import { UserService } from './users.services';
@Global()
@Module({
  providers: [
    {
      provide: 'DB',
      useValue: 'MySQL',
    },
    UserService,
  ],
  exports: [
    {
      provide: 'DB',
      useValue: 'MySQL',
    },
    UserService,
  ],
})
export class UserModule {}
