import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class ApipkmService {
    constructor (private readonly httpService:HttpService){}

    async getAllPkm(){    
            
                const response = await firstValueFrom(
                    this.httpService.get('https://pokeapi.co/api/v2/pokemon/'),
                )
                return response.data
            }
                
    
    async getIdPkm(id: string){    
            
                const response = await firstValueFrom(
                    this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
                )
                return response.data
            }
    async getNamePkm(height: string){    
                   
        const response = await firstValueFrom(
            this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${height}`),
        )
        return response.data
    }         

        
    
    getHello(): string {
        return 'Hello World!';
      }


}
