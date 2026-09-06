import { Controller, Post, Body, Headers } from '@nestjs/common';
import { PayfsService } from './payfs.service';

@Controller('payfs')
export class PayfsController {
  constructor(private readonly payfsService: PayfsService) {}

  @Post('webhook')
  async handleWebhook(@Body() body: any) {
    return this.payfsService.handleWebhook(body);
  }
}