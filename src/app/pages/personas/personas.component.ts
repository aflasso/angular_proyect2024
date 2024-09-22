import { Component } from '@angular/core';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

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
    console.log("entre al ngOnInit")
    this.cargarPersonasDB()

  }

  async cargarPersonasDB() {
    await this.DB.getPersonas().toPromise().then((data: any) => {this.personas = data;console.log(this.personas)})
  }

  editarUnUsuario(idPersona: number | string) {
    console.log("Persona Escogida", idPersona)
    this.router.navigate(['/FormPersona', idPersona])
  }

  eliminarUsuario(personaId: any) {

    this.DB.eliminarPersona(personaId).subscribe({
      next: (data) => {
        console.log("Front:", data)

        Swal.fire({
          title: '¡Éxito!',
          text: 'El usuario ha sido eliminado exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

        this.cargarPersonasDB()

      },

      error: (error) => {

        console.error(error)
        Swal.fire({
          title: '¡Error!',
          text: 'Ocurrió un problema al eliminar el usuario.',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });

      },

      complete: () => {

      }
    })

  }
}
