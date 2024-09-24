import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { AddEditPersonaFormComponent } from './components/add-edit-persona-form/add-edit-persona-form.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { AddEditFormPokemonComponent } from './components/add-edit-form-pokemon/add-edit-form-pokemon.component';
import { ObjetosComponent } from './pages/objetos/objetos.component';
import { AddEditFormObjetoComponent } from './components/add-edit-form-objeto/add-edit-form-objeto.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { tokenGuardGuard } from './auth/guards/token-guard.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'personas', component: PersonasComponent, canActivate: [tokenGuardGuard]},
  {path: 'FormPersona/:id', component: AddEditPersonaFormComponent, canActivate: [tokenGuardGuard]},
  {path: 'pokemons', component: PokemonsComponent, canActivate: [tokenGuardGuard]},
  {path: 'FormPokemon/:id', component: AddEditFormPokemonComponent, canActivate: [tokenGuardGuard]},
  {path: 'objetos', component: ObjetosComponent, canActivate: [tokenGuardGuard]},
  {path: 'FormObjeto/:id', component: AddEditFormObjetoComponent, canActivate: [tokenGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
