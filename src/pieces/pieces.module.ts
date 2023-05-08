import { Module } from '@nestjs/common';
import { PiecesService } from './pieces.service';
import { PiecesController } from './pieces.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PiecesController],
  providers: [PiecesService, PrismaService],
  imports: [PrismaModule],
})
export class PiecesModule {}
