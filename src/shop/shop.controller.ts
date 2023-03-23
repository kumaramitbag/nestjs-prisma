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
import { CreateShopDto } from './dto/createShop.dto';
import { UpdateShopDto } from './dto/updateShop.dto';
import { ShopEntity } from './entity/shop.entity';
import { ShopService } from './shop.service';

@Controller('shop')
@ApiTags('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  @ApiCreatedResponse({ type: ShopEntity })
  create(@Body() createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @Get()
  @ApiOkResponse({ type: ShopEntity, isArray: true })
  async getAllShop() {
    return this.shopService.getAll();
  }

  @Get('/single')
  @ApiOkResponse({ type: ShopEntity })
  async getSingleShop() {
    return this.shopService.getSingle();
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ShopEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShopDto: UpdateShopDto,
  ) {
    return this.shopService.update(id, updateShopDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ShopEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.shopService.remove(id);
  }
}
