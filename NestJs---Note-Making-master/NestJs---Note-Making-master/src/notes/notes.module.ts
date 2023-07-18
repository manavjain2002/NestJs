import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { UserSchema } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';
import { NoteController } from './notes.controller';
import { NoteSchema } from './notes.schema';
import { NoteService } from './notes.services';

@Module({
  controllers: [NoteController],
  providers: [NoteService, UserService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Notes', schema: NoteSchema },
      { name: 'User', schema: UserSchema },
    ]),
    UserModule,
  ],
  exports: [],
})
export class NotesModule {}
