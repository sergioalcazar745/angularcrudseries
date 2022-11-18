import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { PersonajeService } from 'src/app/services/personaje.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css']
})
export class NuevoPersonajeComponent implements OnInit {
  public series!: Array<Serie>;

  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild("selectserie") selectSerie!: ElementRef;

  constructor(private _serviceSerie: SerieService, private _servicePersonaje: PersonajeService, private route: Router) { }

  ngOnInit(): void {
    this._serviceSerie.getSeries().subscribe(response => {
      this.series = response
    });
  }

  postPersonaje(){
    var personaje = new Personaje(
      0, 
      this.cajaNombre.nativeElement.value, 
      this.cajaImagen.nativeElement.value, 
      parseInt(this.selectSerie.nativeElement.value)
    )

    this._servicePersonaje.postPersonaje(personaje).subscribe(response => {
      this.route.navigateByUrl("/personajes/" + personaje.idSerie)
    });
  }

}
