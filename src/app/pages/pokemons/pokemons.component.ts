import { Component } from '@angular/core';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Router, TitleStrategy } from '@angular/router';
import { Pokemon } from '../../config/helpers';
import Swal from 'sweetalert2';

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

  modificarPokemon(pokemonId : number) {

    console.log('Pokemon esocgido', pokemonId);
    this.router.navigate(['/FormPokemon', pokemonId])

  }

  eliminarPokemon(pokemonId : number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {

        this.DB.eliminarPokemon(pokemonId).subscribe({
          next: (data) => {
            console.log("Front", data)
            Swal.fire({
              title: 'Exito!!!',
              text: 'Pokemon eliminado correctamente',
              icon: 'success'
            })
    
            this.cargarPokemons()
          },
          error: (error) => {
            console.error('Error al eliminar pokemon', error)
            Swal.fire({
              title: 'Oops!',
              text: 'Error al eliminar pokemon',
              icon: 'error'
            })
    
          },
          complete: () => {
    
          }
        })

      }else {
        // Swal.fire({
        //   title: 'Cancelado',
        //   text: 'Tu Pokemon esta a salvo',
        //   icon: 'error'
        // })
      }

    })

    

  }
}
