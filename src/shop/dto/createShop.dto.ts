import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateShopDto {
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
  @IsNotEmpty()
  @ApiProperty()
  userId: number;

  //   @IsBoolean()
  //   @IsOptional()
  //   @ApiProperty({ required: false, default: false })
  //   published?: boolean = false;
}
