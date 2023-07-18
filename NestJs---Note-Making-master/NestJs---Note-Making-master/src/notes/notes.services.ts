import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NoteDocument, Notes } from './notes.schema';

export class NoteService {
  constructor(
    @InjectModel(Notes.name) private readonly noteModel: Model<NoteDocument>,
  ) {}

  async findAll(): Promise<Notes[]> {
    return await this.noteModel.find({}).exec();
  }

  async findById(id: number): Promise<Notes> {
    return await this.noteModel.findOne({ _id: id }).exec();
  }

  async create(input: any): Promise<Notes> {
    return await this.noteModel.create(input);
  }

  async update(id: number, input: any): Promise<Notes> {
    return await this.noteModel.findByIdAndUpdate(id, input, { new: true });
  }

  async delete(id: number): Promise<Notes> {
    return await this.noteModel.findByIdAndDelete(id);
  }
}
