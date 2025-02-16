import { Controller, Post, Body } from '@nestjs/common';
import { MenusService } from './menus.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new menu item' })
  @ApiResponse({
    status: 200,
    description: 'The menu item has been successfully created.',
    type: CreateMenuDto,
  })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }
}
