import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public serie!: Serie;

  constructor(private _activateRoute: ActivatedRoute, private _service: SerieService) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if(parametros['id'] != undefined){
        this.getSerie(parametros['id']);
      }
    });
  }

  getSerie(id:any){
    this._service.getSerie(id).subscribe(response => {
      this.serie = response;
    });
  }

}
