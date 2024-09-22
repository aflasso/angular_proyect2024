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
}
