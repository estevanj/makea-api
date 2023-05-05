import { Module } from '@nestjs/common';
import { FurnituresService } from './furnitures.service';
import { FurnituresController } from './furnitures.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FurnituresController],
  providers: [FurnituresService, PrismaService],
  imports: [PrismaModule],
})
export class FurnituresModule {}
