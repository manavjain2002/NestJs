import {
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BodyDTO } from './app.dto';
import { CustomPipe } from './app.pipes';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/pipes/')
  pipes(@Body('id1') id1: any, @Body('id2', ParseIntPipe) id2: any): any {
  // pipes(@Body('id1') id1: any, @Body('id2', ParseFloatPipe) id2: any): any {
    return {
      id1: {
        value: id1,
        type: typeof id1,
      },
      id2: {
        value: id2,
        type: typeof id2,
      },
    };
  }

  @Get('/pipesBool/')
  pipesBool(@Body('id1') id1: any, @Body('id2', ParseBoolPipe) id2: any): any {
    return {
      id1: {
        value: id1,
        type: typeof id1,
      },
      id2: {
        value: id2,
        type: typeof id2,
      },
    };
  }

  //_______________________________________________________________________________________________-

  @Get('/pipesUUID')
  pipesUUID(@Body('id', ParseUUIDPipe) id: any) {
    // pipesUUID(@Body('id', new ParseUUIDPipe({ version: '3' })) id: any) {
    return {
      message: 'Correct uuid',
    };
  }

  //_______________________________________________________________________________________________

  @Get('/pipesArray')
  pipesArray(
    @Body('id', new ParseArrayPipe({ items: Number, separator: ',' })) id: any,
  ) {
    // pipesUUID(@Body('id', new ParseUUIDPipe({ version: '3' })) id: any) {
    return {
      message: id,
      type: typeof id,
    };
  }

  //_____________________________________________________________________________________________

  @Get('/pipesDTO')
  pipesDTO(@Body(ValidationPipe) bodyDTO: BodyDTO) {
    // pipesUUID(@Body('id', new ParseUUIDPipe({ version: '3' })) id: any) {
    return {
      message: bodyDTO,
    };
  }

  //_____________________________________________________________________________________________

  @Get('custompipe')
  @UsePipes(CustomPipe)
  customPipe(@Body() param: any) {
    console.log("🚀 ~ file: app.controller.ts:93 ~ customPipe ~ :", param)
    return {
      message: param,
    };
  }
}
