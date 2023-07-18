import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { OrderService } from './orders.services';

@Module({
  imports: [UserModule.forFeature({ dbname: 'orders' })],
  providers: [OrderService],
})
export class OrderModule {}
