import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { FurnituresModule } from './furnitures/furnitures.module';
import { PiecesModule } from './pieces/pieces.module';

@Module({
  imports: [PrismaModule, CategoriesModule, FurnituresModule, PiecesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
