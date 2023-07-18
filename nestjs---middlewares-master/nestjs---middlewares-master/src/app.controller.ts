import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): any {
    console.log(
      '🚀 ~ file: app.controller.ts:11 ~ AppController ~ getHello ~ req:',
      req,
    );
    res.status(200).json({
      message: 'Hello world',
    });
  }
}
