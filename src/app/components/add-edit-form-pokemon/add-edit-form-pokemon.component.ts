import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Pokemon } from '../../config/helpers';
import { map, pipe } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-form-pokemon',
  templateUrl: './add-edit-form-pokemon.component.html',
  styleUrl: './add-edit-form-pokemon.component.css'
})
export class AddEditFormPokemonComponent {

  pokemon: Pokemon = {
    id: -1,
    nombre: null,
    tipo: null,
    nivel: null,
    entrenador_id: null
  }

  tipos = ['Agua', 'Fuego', 'Planta', 'Fantasma']

  entrenadores!: any

  constructor(private router: Router, private activeRoute: ActivatedRoute, private db: ConexionApiService) {}

  ngOnInit() {
    this.cargarEntrenadores()

    try {

      this.activeRoute.paramMap.subscribe((params: ParamMap) => {
        this.pokemon.id = Number(params.get('id'))
      })

      if (this.pokemon.id != -1) {
        this.cargarPokemon(this.pokemon.id)
      }

      console.log(this.pokemon.id)

    }catch(error) {
      console.error("Error al cargar pokemon", error)
    }
    
  }

  cargarPokemon(pokemonID : any) {
    this.db.getPokemon(pokemonID).subscribe({

      next: (data) => {
        console.log("form:", data)

        this.pokemon.nombre = data.nombre
        this.pokemon.entrenador_id = data.entrenador_id
      },
      error: (error) => {
        console.error('Ocurrio un error al cargar el pokemon:', error)
      },
      complete: () => {
        console.log('Completado')
      }

    }) 
  }

  cargarEntrenadores() {
    
    this.db.getPersonas().subscribe({
      next: (data) => {
        console.log("Front", data)
        this.entrenadores = data
        console.log("NGON", this.entrenadores)
      },
      error: (error) => {
        console.error("Error al cargar entrenadores",error)
      },
      complete: () => {

      }
    })
  }

  nuevoPokemon(pokemon : Pokemon) {

    console.log("entre")
    this.db.postPokemon(pokemon).subscribe({
      
      next: (data) => {
        Swal.fire({
          title: '¡Éxito!',
          text: 'El pokemon ha sido creado exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(["/pokemons"])
        })
        console.log("form:", data)
        
      },
      error: (error) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Error al crear pokemon.',
          icon: 'error',
          confirmButtonText: 'Intenta de nuevo'
        }).then(() => {
          this.router.navigate(["/pokemons"])
        })
        console.error('Ocurrio un error al crear pokemon', error)
      },
      complete: () => {
        console.log('Completado')
      }

    })

  }

  guardar() {
    if (this.pokemon.id == -1) {
      console.log('Entre a nuevo')
      console.log(this.pokemon)
      const {nombre, tipo, nivel, entrenador_id} = this.pokemon
      this.nuevoPokemon({nombre, tipo, nivel, entrenador_id})
    } else {
      // this.modificarPersona()
    }
    }

}
