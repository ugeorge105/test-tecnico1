import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApipkmModule } from './apipkm/apipkm.module';
import { ApirmModule } from './apirm/apirm.module';

@Module({
  imports: [ApipkmModule, ApirmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
