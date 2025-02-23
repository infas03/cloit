import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  Version,
  HttpCode,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FindMenuDto } from './dto/find-menu.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all root menu items' })
  @ApiResponse({
    status: 200,
    description: 'Returns all root menu items with their children.',
  })
  async findAll() {
    return this.menusService.findAll();
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get a specific menu item with depth and parent' })
  @ApiResponse({
    status: 200,
    description: 'Returns a specific menu item with its hierarchy.',
  })
  async findMenuWithDepth(@Query() findMenuDto: FindMenuDto) {
    return this.menusService.findMenuWithDepth(findMenuDto);
  }

  @Version('1')
  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Create a new menu item' })
  @ApiResponse({
    status: 200,
    description: 'The menu item has been successfully created.',
    type: CreateMenuDto,
  })
  async create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @Version('1')
  @Put(':id')
  @ApiOperation({ summary: 'Update a menu item' })
  @ApiResponse({
    status: 200,
    description: 'The menu item has been successfully updated.',
    type: UpdateMenuDto,
  })
  async updateMenu(
    @Param('id') id: string,
    @Body() updateMenuDto: UpdateMenuDto,
  ) {
    return this.menusService.updateMenu(id, updateMenuDto);
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a menu item' })
  @ApiResponse({
    status: 200,
    description: 'The menu item has been successfully deleted.',
  })
  async deleteMenu(@Param('id') id: string) {
    return this.menusService.deleteMenu(id);
  }

  @Version('1')
  @Post('add-to-parent')
  @ApiOperation({ summary: 'Add a new menu item to a parent' })
  @ApiResponse({
    status: 200,
    description: 'The menu item has been successfully added under a parent.',
    type: CreateMenuDto,
  })
  async addMenuToParent(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.addMenuToParent(createMenuDto);
  }
}
