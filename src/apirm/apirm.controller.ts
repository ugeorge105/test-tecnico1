import { Controller, Get, Param } from '@nestjs/common';
import { ApirmService } from './apirm.service';

@Controller('apirm')
export class ApirmController {

    constructor (private readonly apirmmservice:ApirmService){}
    @Get()
        getHello(): string {
            return this.apirmmservice.getHello();
        }
    
        @Get('all')
        async getAllRm(){
            return await this.apirmmservice.getAllRm()
        }
    
    @Get(':id')
        async getIdPkm(@Param('id')id:string){
            return await this.apirmmservice.getIdPkm(id)
        }
    @Get('params')
        async getFilterAll(@Param('params')params){
            return await this.apirmmservice.getFilterAll(params.status)
        }

}
