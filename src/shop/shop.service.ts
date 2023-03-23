import { Injectable } from '@nestjs/common';
import { IShopRo, ISingleShopRo } from './interface/shop.interface';
import { DatabaseService } from '../database/database.service';
import { CreateShopDto } from './dto/createShop.dto';
import { UpdateShopDto } from './dto/updateShop.dto';

@Injectable()
export class ShopService {
  constructor(private dbCon: DatabaseService) {}

  create(createShopeDto: CreateShopDto) {
    return this.dbCon.shop.create({ data: createShopeDto });
  }

  async getAll(): Promise<IShopRo> {
    const shop = await this.dbCon.shop.findMany({
      include: {
        products: {
          include: { user: { select: { id: true, name: true, email: true } } },
        },
        user: true,
      },
    });
    return { success: true, message: '', data: shop };
  }

  async getSingle(): Promise<ISingleShopRo> {
    const shop = await this.dbCon.shop.findUnique({
      where: { id: 1 },
      select: {
        id: true,
        name: true,
        products: {
          select: {
            id: true,
            name: true,
            userId: true,
            user: { select: { id: true, name: true, email: true } },
          },
        },
        user: { select: { id: true, name: true } },
      },
    });

    return { success: true, message: '', data: shop };
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return this.dbCon.shop.update({
      where: { id },
      data: updateShopDto,
    });
  }

  remove(id: number) {
    return this.dbCon.shop.delete({ where: { id } });
  }
}
