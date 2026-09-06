import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class PayfsGateway {
  @WebSocketServer()
  server: Server;

  notifyMoney(amount: number) {
    this.server.emit('money_in', { amount });
  }
}