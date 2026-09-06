import { Injectable } from '@nestjs/common';
import { PayfsGateway } from './gateway';

@Injectable()
export class PayfsService {

  constructor(private gateway: PayfsGateway) {}

  async handleWebhook(body: any) {
    console.log('Webhook received:', body);

    if (body.transferType === 'in') {
      console.log(`💰 Nhận tiền: ${body.transferAmount}`);

      this.gateway.notifyMoney(body.transferAmount);
    }

    return { message: 'OK' };
  }
}