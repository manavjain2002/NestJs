import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { User } from './user.schema';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('users/')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  async all(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('/register')
  async create(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('password') password: string,
  ): Promise<User> {
    const userPresent = await this.userService.findByEmail(email);
    if (userPresent) {
      throw new Error('User already Present- Email already registered');
    }
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return await this.userService.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
  }

  @Post('/login')
  async signIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<any> {
    const userPresent = await this.userService.findByEmail(email);
    if (userPresent && bcrypt.compare(password, userPresent.password)) {
      const access_token = await this.jwtService.sign({
        id: userPresent._id,
        email: userPresent.email,
      });
      return {
        access_token,
      };
    }
  }

  @Put('/edit/:id')
  async edit(
    @Req() req: Request,
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
  ): Promise<any> {
    const user = await this.userService.findByID(id);
    if (user) {
      if (user._id != req['user'].id) {
        throw new ForbiddenException('Not allowed');
      }
      if (user.email != email) {
        const userPresent = await this.userService.findByEmail(email);
        if (userPresent) {
          throw new ForbiddenException(
            'User already Present- Email already registered',
          );
        }
      }
      return await this.userService.update(id, {
        name: name,
        email: email,
        phone: phone,
      });
    } else {
      throw new ForbiddenException('User not found');
    }
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number, @Req() req: Request): Promise<any> {
    const user = await this.userService.findByID(id);
    if (user) {
      if (user._id != req['user'].id) {
        throw new ForbiddenException('Not allowed');
      }
      return await this.userService.delete(id);
    } else {
      throw new ForbiddenException('User not found');
    }
  }
}
