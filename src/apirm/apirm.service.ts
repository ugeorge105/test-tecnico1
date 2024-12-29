import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApirmService {
    constructor (private readonly httpService:HttpService){}
    
        async getAllRm(){    
                
                    const response = await firstValueFrom(
                        this.httpService.get('https://rickandmortyapi.com/api/character'),
                    )
                    return response.data
                }
                    
        async getIdPkm(id: string){    
            
            const response = await firstValueFrom(
                this.httpService.get(`https://rickandmortyapi.com/api/character/${id}`),
            )
            return response.data
        }   

        async getFilterAll(params){    
            
            const response = await firstValueFrom(
                this.httpService.get(`https://rickandmortyapi.com/api/character/${params.status}`),
            )
            return response.data
        }  
    
            
        
        getHello(): string {
            return 'Hello World!';
          }


}
