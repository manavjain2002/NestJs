import { Module } from '@nestjs/common';
import { ServiceOne } from './1.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ServiceOne, AppService],
})
export class AppModule {}
