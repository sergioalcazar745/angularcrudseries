import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Personaje } from "../models/personaje";

@Injectable()
export class PersonajeService{

    constructor(private _http: HttpClient){}

    getPersonajesByIdSerie(id: any): Observable<any>{

        var request = environment.url + "/api/Series/PersonajesSerie/" + id;
        return this._http.get(request)

    }

    getPersonajes(): Observable<any>{

        var request = environment.url + "/api/personajes";
        return this._http.get(request);

    }

    postPersonaje(personaje: Personaje): Observable<any>{

        var request = environment.url + "api/personajes";
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var json = JSON.stringify(personaje);
        console.log(json)
        return this._http.post(request, json, {headers: header});

    }

}