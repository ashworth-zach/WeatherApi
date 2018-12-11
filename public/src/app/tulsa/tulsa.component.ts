import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tulsa',
  templateUrl: './tulsa.component.html',
  styleUrls: ['./tulsa.component.css']
})
export class TulsaComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  var observable=this._httpService.getTulsa();
  observable.subscribe((x)=>{
    console.log(x);
    this.data=x;
    console.log("data",this.data);
  });
  }

}
