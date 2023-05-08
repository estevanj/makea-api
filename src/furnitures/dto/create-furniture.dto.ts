import { ApiProperty } from '@nestjs/swagger';

export class CreateFurnitureDto {
  @ApiProperty()
  categoryId: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  photo_url: string;
  @ApiProperty()
  photosArray: string[];
  @ApiProperty()
  pieces: string[];
}
