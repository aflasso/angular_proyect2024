import { Component } from '@angular/core';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credencial : any = {

    email: '',
    password: ''

  }

  tipoInput = 'password'

  incorretCredencials = false

  constructor (private db : ConexionApiService, private router: Router) {}

  mostrarPassword() {
    if (this.tipoInput == 'password') {
      this.tipoInput = 'text'
    } else {
      this.tipoInput='password'
    }
  }

  login() {

    this.db.login(this.credencial.email, this.credencial.password).subscribe({
      next: (data) => {
        console.log('Se inicio secion correctamente')
        console.log(data.token)

        const token = data.token

        this.incorretCredencials = false

        localStorage.setItem('token', token)

        this.router.navigate(['/home'])
      },
      error: (error) => {

        console.error('error al iniciar sesion', error)

        if (error.status == 401) {
          this.incorretCredencials = true
        }

      },
      complete: () => {

      }
    })

  }

  public guardar() {
    this.login()
  }
}
