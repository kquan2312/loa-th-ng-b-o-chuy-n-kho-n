import { Module } from '@nestjs/common';
import { PayfsController } from './payfs.controller';
import { PayfsService } from './payfs.service';
import { PayfsGateway } from './gateway';

@Module({
  controllers: [PayfsController],
  providers: [PayfsService, PayfsGateway],
})
export class PayfsModule {}