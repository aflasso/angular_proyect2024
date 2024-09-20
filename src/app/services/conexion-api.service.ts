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

   public getPersona(personaId : number) {
    let url = `${URL_LOCAL}/prueba/${personaId}`

    return this.http.get(url).pipe(map((resp : any) => {
      console.log('Service datos:', resp)
      return resp
    }))
   }

   public postPersona(body: any) {

    let url = `${URL_LOCAL}/prueba/new`

    return this.http.post(url, body = body).pipe(map((resp: any) => {
      console.log("Servicio", resp)

      return resp
    }))

   }
 
  
   
}
