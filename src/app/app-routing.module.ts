import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { AddEditPersonaFormComponent } from './components/add-edit-persona-form/add-edit-persona-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'FormPersona/:id', component: AddEditPersonaFormComponent},
  {path: '**', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
