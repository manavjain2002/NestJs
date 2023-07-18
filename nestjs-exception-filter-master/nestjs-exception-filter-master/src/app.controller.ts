import {
  BadRequestException,
  Controller,
  Get,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from './app.exception';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new UnauthorizedException('Error');
  }

  @Get('exceptionfilter')
  // @UseFilters(HttpExceptionFilter)
  filter() {
    throw new BadRequestException('Bad request');
    // throw new UnauthorizedException('Unauthorized');
  }
}
