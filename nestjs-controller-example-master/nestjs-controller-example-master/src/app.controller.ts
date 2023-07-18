import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Redirect,
  Res,
} from '@nestjs/common';

@Controller('/users')
export class AppController {
  @Get('/') // http://localhost:3000/users/ : GET
  getHello(): any {
    return {
      message: 'Hello world',
    };
  }

  @Post('/') // http://localhost:3000/users/ : POST
  postHello(): any {
    return {
      message: 'Hello world Post',
    };
  }

  //____________________________________________________________________________________________

  @Get('/getData/:id') // http://localhost:3000/users/getData/{id}
  getIdParamId(@Param('id') id: string): any {
    console.log(
      '🚀 ~ file: app.controller.ts:20 ~ AppController ~ getIdParamObj ~ param:',
      id,
    );
    return {
      id: id,
    };
  }

  @Get('/getData') // // http://localhost:3000/users/getData
  getId(@Body('id') id: number): any {
    return {
      id: id,
    };
  }

  @Get('/getDataBody')
  getIdParamObj(@Body() body: any): any {
    console.log(
      '🚀 ~ file: app.controller.ts:20 ~ AppController ~ getIdParamObj ~ param:',
      body,
    );
    return body;
  }

  //____________________________________________________________________________________________

  @Get('/error')
  // @Post('/error')
  // @HttpCode(400)
  // @HttpCode(HttpStatus.NOT_FOUND)
  // @Header('MyHeader', 'nestjs')
  // getRes(): any {
  getRes(@Res() res: any): any {
    return {
      message: 'error',
    };
    // res.status(401).json({
    //   message: 123,
    // });
  }
  //____________________________________________________________________________________________

  @Get('/redirect/:x')
  @Redirect(`http://localhost:3000/users/getData/`, 200)
  redirect(@Param() param): any {
    const x = parseInt(param.x);
    if (x < 10) {
      return {
        url: `http://localhost:3000/users/getData/${x}`,
        statusCode: 200,
      };
    } else {
      return {
        url: `http://localhost:3000/users/getData/${x + 10}`,
        statusCode: 400,
      };
    }
  }
}
