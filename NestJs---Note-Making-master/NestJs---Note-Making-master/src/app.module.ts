import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { JwtMiddleware } from './app.middleware';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.KEY,
      global: true,
      signOptions: { expiresIn: '60m' },
    }),
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(JwtMiddleware).forRoutes('/users/edit');
    consumer.apply(JwtMiddleware).forRoutes('/users/delete');
    consumer.apply(JwtMiddleware).forRoutes('/notes');
  }
}
