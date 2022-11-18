import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { PersonajeService } from 'src/app/services/personaje.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-modificar-personaje',
  templateUrl: './modificar-personaje.component.html',
  styleUrls: ['./modificar-personaje.component.css']
})
export class ModificarPersonajeComponent implements OnInit {
  public series!: Array<Serie>;
  public personajes!: Array<Personaje>

  public serie!: Serie;
  public personaje!: Personaje;
  
  constructor(private _serviceSerie: SerieService, private _servicePersonaje: PersonajeService) { }

  ngOnInit(): void {
    this._serviceSerie.getSeries().subscribe(response => {
      this.series = response;
    });
    this._servicePersonaje.getPersonajes().subscribe(response => {
      this.personajes = response;
    });
  }

  changePersonaje(){

  }

  changeSerie(){
    
  }

}
