import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Permission {
  @Prop({ required: true, default: 'R' })
  permit: string;

  @Prop({ required: true })
  person: string;
}

@Schema()
export class Notes extends Document {
  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  note: string;

  @Prop({ required: true })
  permission: Permission[];
}

export type NoteDocument = Notes & Document;

export const NoteSchema = SchemaFactory.createForClass(Notes);
