import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { ConexionApiService } from '../../services/conexion-api.service';

@Component({
  selector: 'app-add-edit-persona-form',
  templateUrl: './add-edit-persona-form.component.html',
  styleUrl: './add-edit-persona-form.component.css'
})
export class AddEditPersonaFormComponent {

  formState: string = "add"
  personaId: number = -1;

  usuario = {
    user: '',
    password: '',
    newPassword: 'andres',
    email: ''
  }

  constructor (private router: Router, private activeRoute: ActivatedRoute, private db: ConexionApiService) {}

  ngOnInit() {

    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.personaId = Number(params.get('id'))
    })

    if (this.personaId != -1) {
      this.formState = "mod"
      this.cargarPersona(this.personaId)
    }

    console.log(this.personaId)
  }

  cargarPersona(personaId : number) {

    this.db.getPersona(personaId).subscribe({

      next: (data) => {
        console.log("form:", data)

        this.usuario.user = data.usuario
        this.usuario.email = data.email
      },
      error: (error) => {
        console.error('Ocurrio un error al cargar el usuario:', error)
      },
      complete: () => {
        console.log('Completado')
      }

    }) 

  }

  nuevaPersona(){
    
    const { user, password, email } = this.usuario;

    this.db.postPersona({ user, password, email }).subscribe({

      next: (data) => {
        console.log("form:", data)
      },
      error: (error) => {
        console.error('Ocurrio un error al crear el usuario:', error)
      },
      complete: () => {
        console.log('Completado')
      }
    })

  }

  modificarPersona() {
    
  }

  guardar(){
    if (this.personaId == -1) {
      this.nuevaPersona()
    } else {
      console.log(this.usuario)
    }
  }
}
