import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { StatusOK } from '../dto/health-check.response.dto';

@Controller('health')
export class HealthController {
  // For server health check
  @Get('')
  @ApiResponse({ type: StatusOK, status: 200 })
  healthCheck(): { status: string } {
    return { status: 'OK' };
  }
}
