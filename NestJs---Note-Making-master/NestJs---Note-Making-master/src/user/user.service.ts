import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find({}).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email }).exec();
  }

  async findByID(id: number): Promise<User> {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  async create(input: any): Promise<User> {
    const newUser = await this.userModel.create(input);
    return newUser.save();
  }

  async update(id: number, input: any): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate({ _id: id }, input, { new: true })
      .exec();
    return updatedUser;
  }

  async delete(id: number): Promise<User> {
    const deletedUser = await this.userModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedUser;
  }
}
