import { Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class NewService {
  constructor(@Inject(AppService) private appService: string) {
    console.log('🚀 ~ file: 1.service.ts:5 ~ ServiceOne ~ constructor ~ appService:',appService);
  }
  // constructor(private appService: AppService){
  //     console.log("🚀 ~ file: 1.service.ts:5 ~ ServiceOne ~ constructor ~ appService:", appService)
  // }
  // constructor(@Inject('AppService') private appService: string){
  //     console.log("🚀 ~ file: 1.service.ts:5 ~ ServiceOne ~ constructor ~ appService:", appService)
  // }
  // constructor(
  //   @Inject('AppService') private appService: any,
  //   @Inject(AppService) private appService1: AppService,
  // ) {
  //   console.log(
  //     '🚀 ~ file: 1.service.ts:5 ~ ServiceOne ~ constructor ~ appService:',
  //     appService,
  //     appService1,
  //   );
  // }
    //  constructor(@Inject('DB') private url: any){
    //     console.log("🚀 ~ file: 1.service.ts:5 ~ ServiceOne ~ constructor ~ url:", url)
    //     // url();
    // }
}
