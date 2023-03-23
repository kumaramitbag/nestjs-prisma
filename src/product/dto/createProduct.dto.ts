import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  amount?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  shopId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  userId: number;
}
