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

            if (error.status == 401) {
              Swal.fire({
                title: '¡Error!',
                text: 'Debes iniciar session para esta accion',
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
              });

              return
            }

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
      } else {
                Swal.fire({
          title: 'Cancelado',
          text: 'Tu Usuario esta a salvo',
          icon: 'error'
        })
      }
    })

    

  }
}
