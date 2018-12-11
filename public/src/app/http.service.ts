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
  getSeattle(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=Seattle,US&appid=c7b1b75be2bec974c6abebbdb05fcdd4");

  }
  getTulsa() {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=Tulsa,US&appid=c7b1b75be2bec974c6abebbdb05fcdd4");
  }
}