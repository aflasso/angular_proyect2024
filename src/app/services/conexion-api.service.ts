import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Pokemon, URL_LOCAL } from '../config/helpers';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  constructor(public http: HttpClient) {}

   
   public getPersonas() {
    
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

  /**
   * updatePersona
   */
  public updatePersona(body: any) {
    let url = `${URL_LOCAL}/prueba/update`

    return this.http.put(url, body = body).pipe(map((resp: any) => {
      console.log("Servicio", resp)

      return resp
    }))
  }


  public eliminarPersona(personaId: any) {

    let url = `${URL_LOCAL}/prueba/delete/${personaId}`

    return this.http.delete(url).pipe(map((resp: any) => {
      console.log("Servicio", resp)

      return resp
    }))

  }


  public getPokemons() {

    let url = `${URL_LOCAL}/pokemon/`

    return this.http.get(url).pipe(map((resp: any) => {
      console.log("Servicio", resp)
      return resp
    }))

  }

  getPokemon(pokemonId : number) {
    let url = `${URL_LOCAL}/pokemon/${pokemonId}`

    return this.http.get(url).pipe(map((resp: any) => {
      console.log("Servicio", resp)

      return resp
    }))
  }

  public postPokemon(pokemon : Pokemon) {

    let url = `${URL_LOCAL}/pokemon/new`

    return this.http.post(url, pokemon).pipe(map((resp: any) => {
      console.log("Servicio", resp)

      return resp
    }))

  }
 
  
   
}
