import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, UserModule, ShopModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
