import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){console.log('Initialized')}
}
