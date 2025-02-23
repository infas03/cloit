import { Module } from '@nestjs/common';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [MenusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
