import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class FindMenuDto {
  @ApiProperty()
  @IsString()
  menuId: string;

  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  @IsInt()
  depth: number = 1;
}
