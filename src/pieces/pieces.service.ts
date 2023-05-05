import { Injectable } from '@nestjs/common';
import { CreatePieceDto } from './dto/create-piece.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PiecesService {
  constructor(private prisma: PrismaService) {}

  async create(createPieceDto: CreatePieceDto) {
    return await this.prisma.piece.create({
      data: createPieceDto,
    });
  }

  async findAll() {
    return await this.prisma.piece.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.piece.findUnique({ where: { id } });
  }
}
