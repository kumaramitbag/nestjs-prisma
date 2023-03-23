import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductEntity } from './entity/product.entity';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiCreatedResponse({ type: ProductEntity })
  create(@Body() createShopDto: CreateProductDto) {
    return this.productService.create(createShopDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductEntity, isArray: true })
  getAllUser() {
    return this.productService.getAll();
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ProductEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProductEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
