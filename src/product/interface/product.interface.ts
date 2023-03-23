import { ProductEntity } from '../entity/product.entity';

export interface IProductRo {
  success: boolean;
  message: string;
  data: ProductEntity[];
}
