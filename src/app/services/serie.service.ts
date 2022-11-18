import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class SerieService {

    constructor(private _http: HttpClient) {}

    getSeries(): Observable<any>{

        var request = environment.url + "api/series";
        return this._http.get(request)

    }

    getSerie(id:any): Observable<any>{
        
        var request = environment.url + "api/series/" + id;
        return this._http.get(request);

    }
}