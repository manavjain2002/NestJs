import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { ProductService } from './products.services';

@Module({
  imports: [
    UserModule.forRoot({ db: 'mongo' }),
    UserModule.forFeature({ dbname: 'products' }),
  ],
  providers: [ProductService],
})
export class ProductModule {
  constructor() {
    console.log('Initializd');
  }
}
