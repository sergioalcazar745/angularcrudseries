import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje/nuevo-personaje.component';
import { ModificarPersonajeComponent } from './components/modificar-personaje/modificar-personaje.component';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { SerieService } from './services/serie.service';
import { PersonajeService } from './services/personaje.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoPersonajeComponent,
    ModificarPersonajeComponent,
    SerieComponent,
    PersonajesComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders, SerieService, PersonajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
