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
  getPath(city) {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+",US&units=imperial&appid=c7b1b75be2bec974c6abebbdb05fcdd4");
  }
}