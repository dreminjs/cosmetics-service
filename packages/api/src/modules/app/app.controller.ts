import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('check-health')
  public checkHealth() {
    return { message: 'Hello World!' };
  }
}
