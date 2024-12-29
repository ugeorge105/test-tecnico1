import { Module } from '@nestjs/common';
import { ApirmController } from './apirm.controller';
import { ApirmService } from './apirm.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  controllers: [ApirmController],
  providers: [ApirmService]
})
export class ApirmModule {}
