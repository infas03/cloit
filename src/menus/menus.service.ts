import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenusService {
  constructor(private prisma: PrismaService) {}

  create(createMenuDto: CreateMenuDto) {
    try {
      return this.prisma.menu.create({ data: createMenuDto });
    } catch (error) {
      throw new Error(`Error creating menu: ${error.message}`);
    }
  }
}
