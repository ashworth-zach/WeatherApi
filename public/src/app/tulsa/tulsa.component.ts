import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { getViewData } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-tulsa',
  templateUrl: './tulsa.component.html',
  styleUrls: ['./tulsa.component.css']
})
export class TulsaComponent implements OnInit {
  data={};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  this._httpService.getTulsa().subscribe(function(data){
    this.data=data;
  });
  }

}
