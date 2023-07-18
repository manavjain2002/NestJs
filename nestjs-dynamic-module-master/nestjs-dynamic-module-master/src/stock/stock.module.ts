import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [UserModule.register({ db: 'Compass', dbname: 'Stock' })],
})
export class StockModule {}
