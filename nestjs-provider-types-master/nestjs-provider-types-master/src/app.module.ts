import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NewService } from "./new.services";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    NewService,
    // {
    //   provide: AppService,
    //   useClass: AppService,
    // },
    AppService,
    // {
    //   provide: 'AppService',
    //   useClass: AppService,
    // },
    // {
    //   provide: 'AppService',
    //   useExisting: AppService,
    // },
    // {
    //   provide: 'DB',
    //   useValue: 'testDB',
    // },
    // {
    //   provide: 'DB',
    //   useValue: ['testDb', 'tutorialDb'],
    // },
    // {
    //   provide: 'DB',
    //   useValue: function xyz() {
    //     console.log('Func');
    //   },
    // },
    // {
    //   provide: 'DB',
    //   useFactory: () => {
    //     if (10 > 2) {
    //       return 'testDB';
    //     } else {
    //       return 'tutorialDB';
    //     }
    //   },
    // },
    {
      provide: 'DB',
      useFactory: (val) => {
        if (val > 10) {
          return 'testDB';
        } else {
          return 'tutorialDB';
        }
      },
      inject: ['val'],
    },
    {
      provide: 'val',
      useValue: 20,
    },
  ],
})
export class AppModule {}
