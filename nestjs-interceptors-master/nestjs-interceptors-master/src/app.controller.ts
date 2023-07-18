import { Controller, Get, Req, Res, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express';
import { MyInterceptor } from './app.interceptor';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(MyInterceptor)
  getHello(@Req() req: Request): any {
    console.log(
      '🚀 ~ file: app.controller.ts:13 ~ AppController ~ getHello ~ req:',
      req,
    );
    return {
      message: 'Hello world',
    };
  }
}
