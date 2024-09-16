import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { URL_LOCAL } from '../config/helpers';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  constructor(public http: HttpClient) {

   }

   
   public getPersonas() : any {
    
    let url = `${URL_LOCAL}/prueba`

    return this.http.get(url).pipe(map((resp: any) => {
      
      console.log('DATOS: ', resp); 
      return resp
    }))
   }

  
   
}
