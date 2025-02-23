import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MenusController],
  providers: [MenusService, PrismaService],
  imports: [],
})
export class MenusModule {}
