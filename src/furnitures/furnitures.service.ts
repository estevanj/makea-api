import { Injectable } from '@nestjs/common';
import { CreateFurnitureDto } from './dto/create-furniture.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FurnituresService {
  constructor(private prisma: PrismaService) {}

  async create(createFurnitureDto: CreateFurnitureDto) {
    return await this.prisma.furniture.create({
      data: createFurnitureDto,
    });
  }

  async findAll() {
    return await this.prisma.furniture.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.furniture.findUnique({ where: { id } });
  }
}
