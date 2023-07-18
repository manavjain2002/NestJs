import { Controller, Get, UseGuards } from '@nestjs/common';
import { Guard } from './app.guard';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @UseGuards(Guard)
  getHello(): string {
    return this.appService.getHello();
  }
}
