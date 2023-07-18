import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { NoteService } from './notes/notes.services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly noteService: NoteService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    return await this.validateRequest(req);
  }

  async validateRequest(req: any): Promise<any> {
    let type: string;
    if (req.originalUrl.includes('Permission')) {
      type = 'P';
    } else if (req.originalUrl.includes('edit')) {
      type = 'W';
    } else if (req.originalUrl.includes('delete')) {
      type = 'D';
    } else {
      type = 'R';
    }

    const note = await this.noteService.findById(req.params.id);
    if (type == 'P') {
      if (note.createdBy == req.user.id) {
        return true;
      } else {
        return false;
      }
    } else {
      const permissions = note.permission;
      return permissions.map((data) => {
        if (data.person == req.user.id) {
          const permits = data.permit.split(',');

          if (permits.includes(type)) {
            return true;
          } else {
            return false;
          }
        }
      });
    }
  }
}
