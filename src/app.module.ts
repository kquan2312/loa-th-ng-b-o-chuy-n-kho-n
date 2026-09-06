import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayfsModule } from './payfs/payfs.module';
import { TransactionsModule } from './transactions/transactions.module';
import { NotifierModule } from './notifier/notifier.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PayfsGateway } from './payfs/gateway';


@Module({
  imports: [PayfsModule, TransactionsModule, NotifierModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
