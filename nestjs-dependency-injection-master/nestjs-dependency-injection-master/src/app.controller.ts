import { Controller, Get, Inject } from '@nestjs/common';
import { ServiceOne } from './1.service';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  @Inject(ServiceOne)
  private serviceOne: ServiceOne;
  @Get()
  get(): any {
    return this.serviceOne.get();
  }
}
