import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  constructor(public http: HttpClient) {

   }

   
   public getPersonas() : any {
    
    let url = '${URL_LOCAL}/prueba'

    return this.http.get(url).pipe(map((data: any) => {console.log('DATOS: ', data); return data.results}))
   }
   
}
