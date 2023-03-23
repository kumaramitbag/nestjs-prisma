import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { IProductRo } from './interface/product.interface';

@Injectable()
export class ProductService {
  constructor(private dbCon: DatabaseService) {}

  create(createShopeDto: CreateProductDto) {
    return this.dbCon.shop.create({ data: createShopeDto });
  }

  async getAll(): Promise<IProductRo> {
    const user = await this.dbCon.product.findMany({
      include: { shop: true, user: true },
    });
    return { success: true, message: '', data: user };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.dbCon.product.update({
      where: { id },
      data: updateProductDto as Prisma.ProductUncheckedUpdateInput,
    });
  }

  remove(id: number) {
    return this.dbCon.product.delete({ where: { id } });
  }
}
