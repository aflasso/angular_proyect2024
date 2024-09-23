import { Component } from '@angular/core';
import { ConexionApiService } from '../../services/conexion-api.service';
import { Router } from '@angular/router';

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

  }

}
