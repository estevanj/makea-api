import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoryDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  photo_url: string;
}
