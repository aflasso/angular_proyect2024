import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddEditPersonaFormComponent } from './components/add-edit-persona-form/add-edit-persona-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { AddEditFormPokemonComponent } from './components/add-edit-form-pokemon/add-edit-form-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonasComponent,
    NavbarComponent,
    AddEditPersonaFormComponent,
    PokemonsComponent,
    AddEditFormPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
