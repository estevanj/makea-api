import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FurnituresService } from './furnitures.service';
import { CreateFurnitureDto } from './dto/create-furniture.dto';

@Controller('furnitures')
export class FurnituresController {
  constructor(private readonly furnituresService: FurnituresService) {}

  @Post()
  create(@Body() createFurnitureDto: CreateFurnitureDto) {
    return this.furnituresService.create(createFurnitureDto);
  }

  @Get()
  findAll() {
    return this.furnituresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.furnituresService.findOne(id);
  }
}
