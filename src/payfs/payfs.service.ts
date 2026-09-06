import { Injectable } from '@nestjs/common';
import { PayfsGateway } from './gateway';

@Injectable()
export class PayfsService {

  constructor(private gateway: PayfsGateway) {}

  async handleWebhook(body: any) {
    console.log('Webhook received:', body);

    if (body.transfer_type === 'credit') {
      console.log(`💰 Nhận tiền: ${body.amount}`);
      this.gateway.notifyMoney(body.amount); // 🔥 bắn realtime ra ngoài
    }

    return { message: 'OK' };
  }
}