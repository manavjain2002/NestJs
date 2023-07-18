import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotAcceptableException,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/app.guard';
import { Interceptor } from 'src/app.interceptor';
import { NotesDTO, PermissionDTO } from './notes.dto';
import { NoteService } from './notes.services';

@Controller('/notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  get(): string {
    return 'Notes';
  }

  @Post('/create')
  @UseInterceptors(Interceptor)
  async createNote(
    @Body(ValidationPipe) param: NotesDTO,
    @Req() req: Request,
  ): Promise<any> {
    return await this.noteService.create({
      createdBy: req['user'].id,
      name: param.name,
      note: param.note,
      permission: {
        person: req['user'].id,
        permit: 'R,W,U,D',
      },
    });
  }

  @Put('/edit/:id')
  @UseGuards(AuthGuard)
  @UseInterceptors(Interceptor)
  async editNote(
    @Param('id') id: number,
    @Body('note') note: string,
  ): Promise<any> {
    const notePresent = await this.noteService.findById(id);
    if (notePresent) {
      return await this.noteService.update(id, { note });
    } else {
      throw new NotAcceptableException('No such note found');
    }
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard)
  async deleteNote(@Param('id') id: number): Promise<any> {
    const notePresent = await this.noteService.findById(id);
    if (notePresent) {
      return await this.noteService.delete(id);
    } else {
      throw new NotAcceptableException('No such note found');
    }
  }

  @Put('/addPermission/:id')
  @UseGuards(AuthGuard)
  async addPermission(
    @Param('id') id: number,
    @Req() req: Request,
    @Body() param: PermissionDTO,
  ): Promise<any> {
    const notePresent = await this.noteService.findById(id);

    if (notePresent) {
      notePresent.permission.map((data) => {
        if (data.person == param.person) {
          throw new ForbiddenException(
            'User already added for the permission. Please edit the permission',
          );
        }
      });
    }
    const permission = [
      ...notePresent.permission,
      { person: param.person, permit: param.permit },
    ];
    if (notePresent) {
      if (notePresent.createdBy == req['user'].id) {
        return await this.noteService.update(id, {
          permission,
        });
      }
    }
  }

  @Put('/editPermission/:id')
  @UseGuards(AuthGuard)
  async editPermission(
    @Param('id') id: number,
    @Req() req: Request,
    @Body(ValidationPipe) param: PermissionDTO,
  ): Promise<any> {
    const notePresent = await this.noteService.findById(id);
    if (notePresent) {
      if (notePresent.createdBy == req['user'].id) {
        let permission = [];
        notePresent.permission.map((data) => {
          if (data.person == param.person) {
            data.permit = param.permit;
          }
          permission = [...permission, data];
        });
        return await this.noteService.update(id, {
          permission,
        });
      }
    }
  }

  @Delete('/deletePermission/:id')
  @UseGuards(AuthGuard)
  async deletePermission(
    @Param('id') id: number,
    @Req() req: Request,
    @Body('person') person: string,
  ): Promise<any> {
    const notePresent = await this.noteService.findById(id);
    if (notePresent) {
      if (notePresent.createdBy == req['user'].id) {
        let permission = [];
        notePresent.permission.map((data) => {
          if (data.person != person) {
            permission = [...permission, data];
          }
        });
        return await this.noteService.update(id, { permission });
      }
    }
  }
}
