import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Guard } from './app.guard';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Guard],
})
export class AppModule {}
