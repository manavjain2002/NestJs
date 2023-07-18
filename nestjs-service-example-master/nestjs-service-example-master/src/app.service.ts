import { Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './app.schema';

export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    console.log(
      '🚀 ~ file: app.service.ts:7 ~ AppService ~ constructor ~ userModel:',
      userModel,
    );
  }

  async findAll(): Promise<any> {
    return this.userModel.find({}).exec();
  }
}
