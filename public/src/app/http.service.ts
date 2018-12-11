import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data={};
  constructor(private _http: HttpClient) {
    //   this.getTasks();
  }

  getTulsa(x) {
    return this._http.get("https://samples.openweathermap.org/data/2.5/weather?q=Tulsa,us&appid=b6907d289e10d714a6e88b30761fae22");
  }
}