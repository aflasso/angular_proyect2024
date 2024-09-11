import { Component } from '@angular/core';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {

  personas!:any

    constructor(private DB: ConexionApiService, private router: Router) {

  }

  ngOnInit() {
    console.log("cargado persona")
    this.cargarPersonasDB()
  }

  async cargarPersonasDB() {
    await this.DB.getPersonas().toPromise().then((data: any) => {this.personas = data;console.log(this.personas)})
  }
}
