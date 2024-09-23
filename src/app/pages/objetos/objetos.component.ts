import { Component } from '@angular/core';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {

  objetos! : any

  constructor(private db : ConexionApiService, private router: Router) {}

  ngOnInit() {
    this.cargarObjetos()
  }

  cargarObjetos() {
    this.db.getObjetos().subscribe({

      next: (data) => {
        console.log("Front", data)
        this.objetos = data.data
      },
      error: (error) => {
        console.error("Ocurrio un erro al cargar los objetos", error)
      },
      complete: () => {}
    })
  }

  editarObjeto(objetoId : number) {
    this.router.navigate(['/FormObjeto', objetoId])
  }

  eliminarObjeto(objetoId: number) {

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

        this.db.eliminarObjeto(objetoId).subscribe({
          next: (data) => {
            console.log("Front", data)
            Swal.fire({
              title: 'Exito!!!',
              text: 'Objeto eliminado correctamente',
              icon: 'success'
            })
    
            this.cargarObjetos()
          },
          error: (error) => {
            console.error('Error al eliminar objetos', error)
            Swal.fire({
              title: 'Oops!',
              text: 'Error al eliminar objetos',
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
