import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';

// import * from '../user/'
@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      cache: true,
      envFilePath: ['./src/.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  exports: [UserService],
})
export class UserModule {}
