import { ShopEntity } from '../entity/shop.entity';

export interface IShopRo {
  success: boolean;
  message: string;
  data: ShopEntity[];
}

export interface ISingleShopRo {
  success: boolean;
  message: string;
  data: any;
}
