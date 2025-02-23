import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { FindMenuDto } from './dto/find-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenusService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.menu.findMany({
      where: { parentId: null },
      include: {
        children: {
          include: {
            children: {
              include: {
                children: true,
              },
            },
          },
        },
      },
    });
  }

  async findMenuWithDepth(findMenuDto: FindMenuDto) {
    const { menuId, depth } = findMenuDto;

    return this.prisma.menu.findUnique({
      where: { id: menuId },
      include: {
        parent: depth > 1 ? { include: { parent: true } } : false,
        children: true,
      },
    });
  }

  async create(createMenuDto: CreateMenuDto) {
    const { name, parentId, parentName } = createMenuDto;

    try {
      if (parentId) {
        const parentMenu = await this.prisma.menu.findUnique({
          where: { id: parentId },
        });

        if (!parentMenu) {
          throw new Error('Parent menu not found');
        }

        const typedParentMenu = parentMenu as { depth: number };

        return this.prisma.menu.create({
          data: {
            name,
            parentId,
            parentName,
            depth: typedParentMenu.depth + 1,
          },
        });
      } else {
        return this.prisma.menu.create({
          data: {
            name,
            depth: 1,
          },
        });
      }
    } catch (error) {
      throw new Error(`Error creating menu: ${error.message}`);
    }
  }

  async updateMenu(id: string, updateMenuDto: UpdateMenuDto) {
    return this.prisma.menu.update({
      where: { id: id },
      data: updateMenuDto,
    });
  }

  async deleteMenu(menuId: string) {
    try {
      await this.prisma.menu.delete({
        where: { id: menuId },
      });
    } catch (error) {
      throw new Error(`Error deleting menu: ${error.message}`);
    }
  }

  async addMenuToParent(createMenuDto: CreateMenuDto) {
    const { parentId } = createMenuDto;

    try {
      if (parentId) {
        const parentMenu = await this.prisma.menu.findUnique({
          where: { id: parentId },
        });

        if (!parentMenu) {
          throw new Error('Parent menu not found');
        }

        const typedParentMenu = parentMenu as { depth: number };

        return this.prisma.menu.create({
          data: {
            ...createMenuDto,
            parentId,
            depth: typedParentMenu.depth + 1,
          },
        });
      } else {
        return this.prisma.menu.create({
          data: {
            ...createMenuDto,
            depth: createMenuDto.depth || 0,
          },
        });
      }
    } catch (error) {
      throw new Error(`Error creating menu: ${error.message}`);
    }
  }
}
