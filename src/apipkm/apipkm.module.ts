import { Module } from '@nestjs/common';
import { ApipkmService } from './apipkm.service';
import { ApipkmController } from './apipkm.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  providers: [ApipkmService],
  controllers: [ApipkmController],
  exports:[HttpModule],
})

export class ApipkmModule {}
