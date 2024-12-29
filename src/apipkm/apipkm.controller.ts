import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param } from '@nestjs/common';

import { ApipkmService } from './apipkm.service';

@Controller('apipkm')
export class ApipkmController {
    constructor (private readonly apipkmservice:ApipkmService){}

    @Get()
    getHello(): string {
        return this.apipkmservice.getHello();
    }

    @Get('all')
    async getAllPkm(){
        return await this.apipkmservice.getAllPkm()
    }

    @Get(':id')
    async getIdPkm(@Param('id')id:string){
        return await this.apipkmservice.getIdPkm(id)
    }

    @Get(':name')
    async getNamePkm(@Param('name')height:string){
        return await this.apipkmservice.getNamePkm(height)
    }

}
