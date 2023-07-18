import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class ServiceOne {
  constructor(private appService: AppService) {
  // constructor(@Inject(AppService) private appService: AppService) {
    console.log(
      '🚀 ~ file: 1.service.ts:5 ~ ServiceOne ~ constructor ~ appService:',
      appService,
    );
  }

//   // @Inject(AppService)
//   // private appNewService: AppService;
  get(): any {
    // this.appNewService.getHello();
    this.appService.getHello();
  }
}

// @Injectable()
// export class ServiceOne {
//   constructor(
//     @Inject(forwardRef(() => AppService))
//     private readonly appService: AppService,
//   ) {
//     console.log("🚀 ~ file: 1.service.ts:28 ~ ServiceOne ~ appService:", appService)
//     }

//   // @Inject(AppService)
//   // private appNewService: AppService;
//   get(): any {
//     // this.appNewService.getHello();
//     this.appService.getHello();
//   }
// }
