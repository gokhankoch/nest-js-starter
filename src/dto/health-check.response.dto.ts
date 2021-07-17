import { ApiProperty } from '@nestjs/swagger';

export class StatusOK {
  @ApiProperty({
    default: 'OK',
    required: true,
  })
  status: string;
}
