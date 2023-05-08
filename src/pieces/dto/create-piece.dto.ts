import { ApiProperty } from '@nestjs/swagger';

export class CreatePieceDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  photo_url: string;
}
