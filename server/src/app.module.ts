import { Module } from '@nestjs/common';
import { MenusModule } from './menus/menus.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [MenusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
