import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { OrderModule } from './orders/orders.module';
import { UserModule } from './users/users.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [UserModule, OrderModule, ProductModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
