import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { ProductController } from './products.controller';
import { ProductService } from './products.services';

@Module({
  imports: [UserModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
