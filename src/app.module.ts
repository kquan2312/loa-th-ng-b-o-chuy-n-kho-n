import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayfsModule } from './payfs/payfs.module';
import { NotifierModule } from './notifier/notifier.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PayfsModule, NotifierModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
