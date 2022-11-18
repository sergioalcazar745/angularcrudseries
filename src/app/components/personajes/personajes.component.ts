import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes!: Array<Personaje>
  public id!: string;

  constructor(private _service: PersonajeService, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if(parametros['id'] != undefined){
        this.id = parametros['id']
        this.getPersonajes(parametros['id']);
      }
    });
  }

  getPersonajes(id:any){
    this._service.getPersonajesByIdSerie(id).subscribe(response => {
      this.personajes = response;
    })
  }

}
