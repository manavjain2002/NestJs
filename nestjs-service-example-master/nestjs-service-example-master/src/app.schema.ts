import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  Name: string;

  @Prop({ required: false, default: 'xyz@gmail.com' })
  Email: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
