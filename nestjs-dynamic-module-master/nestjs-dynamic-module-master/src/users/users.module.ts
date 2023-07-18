import { DynamicModule, Module } from '@nestjs/common';
import { UserService } from './users.services';
let ROOT_OPTIONS;
const DB = 'MySQL';
const DBNAME = 'Default';

@Module({
  providers: [
    UserService,
    {
      provide: 'dbConfig',
      useValue: { db: DB, DBNAME: DBNAME },
    },
  ],
  exports: [UserService],
})
export class RootUserModule {}

@Module({})
export class UserModule {
  static register(options: any): DynamicModule {
    console.log(
      '🚀 ~ file: users.module.ts:22 ~ UserModule ~ register ~ options:',
      options,
    );
    return {
      module: UserModule,
      providers: [
        UserService,
        {
          provide: 'dbConfig',
          useValue: options.db + '/' + options.dbname,
        },
      ],
      exports: [
        UserService,
        {
          provide: 'dbConfig',
          useValue: options.db + '/' + options.dbname,
        },
      ],
    };
  }
  static forRoot(options: any): DynamicModule {
    const opts = UserModule.buildOptions({ db: options.db });
    console.log(
      '🚀 ~ file: users.module.ts:23 ~ UserModule ~ forRoot ~ opts:',
      opts,
    );

    ROOT_OPTIONS = opts;

    return {
      module: RootUserModule,
      providers: [
        UserService,
        {
          provide: 'dbConfig',
          useValue: opts.db + '/' + opts.dbname,
        },
      ],
      exports: [
        UserService,
        {
          provide: 'dbConfig',
          useValue: opts.db + '/' + opts.dbname,
        },
      ],
    };
  }

  static forFeature(options: any): DynamicModule {
    const opts = UserModule.buildOptions({
      ...ROOT_OPTIONS,
      dbname: options.dbname,
    });
    console.log(
      '🚀 ~ file: users.module.ts:49 ~ UserModule ~ forFeature ~ opts:',
      opts,
    );

    return {
      imports: [RootUserModule],
      module: UserModule,
      providers: [
        UserService,
        {
          provide: 'dbConfig',
          useValue: opts.db + '/' + opts.dbname,
        },
      ],
      exports: [
        {
          provide: 'dbConfig',
          useValue: opts.db + '/' + opts.dbname,
        },
        UserService,
      ],
    };
  }

  private static buildOptions(options: any) {
    return Object.assign(
      {
        db: DB,
        dbname: DBNAME,
      },
      options,
    );
  }
}
