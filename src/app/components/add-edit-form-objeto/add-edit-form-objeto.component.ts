import { Component } from '@angular/core';
import { Objeto } from '../../config/helpers';
import { ConexionApiService } from '../../services/conexion-api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-form-objeto',
  templateUrl: './add-edit-form-objeto.component.html',
  styleUrl: './add-edit-form-objeto.component.css'
})
export class AddEditFormObjetoComponent {

  objeto : Objeto = {

    id: -1,
    nombre: '',
    descripcion: ''
  }

  constructor(private db : ConexionApiService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {

    try {

      this.activeRoute.paramMap.subscribe((params: ParamMap) => {
        this.objeto.id = Number(params.get('id'))
      })

      if (this.objeto.id != -1) {
        this.cargarObjeto(this.objeto.id)
      }

    }catch(error) {
      console.error("Error al cargar pokemon", error)
    }
    
  }

  cargarObjeto(objetoId: any) {

    this.db.getObjeto(objetoId).subscribe({

      next: (data) => {
        console.log("form:", data)

        this.objeto.nombre = data.data.nombre
        this.objeto.descripcion = data.data.descripcion
      },
      error: (error) => {
        console.error('Ocurrio un error al cargar el objeto:', error)
      },
      complete: () => {
        
      }

    })

  }

  nuevoObjeto(objeto: Objeto) {
    const {nombre, descripcion} = objeto

    console.log("entre")
    this.db.postObjeto({nombre, descripcion}).subscribe({
      
      next: (data) => {
        Swal.fire({
          title: '¡Éxito!',
          text: 'El objeto ha sido creado exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(["/objetos"])
        })
        console.log("form:", data)
        
      },
      error: (error) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Error al crear objeto.',
          icon: 'error',
          confirmButtonText: 'Intenta de nuevo'
        }).then(() => {
          this.router.navigate(["/pokemons"])
        })
        console.error('Ocurrio un error al crear el objeto', error)
      },
      complete: () => {
        console.log('Completado')
      }

    })

  }

  
  modificarObjeto(objetoId: Objeto) {

    console.log(objetoId)
    this.db.updateObjeto(objetoId).subscribe({
      next: (data) => {
          console.log('Nuevo objeto', data)
          Swal.fire({
            title: 'Exito!!!',
            text: 'Objeto modificado correctamente',
            icon: 'success'
          }).then(() => {
            this.router.navigate(['/objetos'])
          })
      },
      error: (error) => {
        console.error('Error al modificar objeto', error)
        Swal.fire({
          title: 'Oops!!!',
          text: 'Error al modificar objeto',
          icon: 'error'
        }).then(() => {
          this.router.navigate(['/objetos'])
        })
      },
      complete: () => {

      }
    })

  }



  guardar() {
    console.log("datos enviados", this.objeto)

    if (this.objeto.id == -1) {
      this.nuevoObjeto(this.objeto)
    } else {
      this.modificarObjeto(this.objeto)
    }
  }

}
