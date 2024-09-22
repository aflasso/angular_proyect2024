import { Component } from '@angular/core';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  pokemons! : any

  /**
   *
   */
  constructor(private DB: ConexionApiService, private router: Router) {}

  ngOnInit() {

    this.cargarPokemons()

  }

  cargarPokemons() {

    this.DB.getPokemons().subscribe({
      next: (data) => {

        console.log("Front", data)
        this.pokemons = data

      },
      error: (error) => {

        console.error('Error al cargar pokemons', error)

      },
      complete: () => {

      }
    })

  }
}
