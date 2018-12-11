import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-tulsa',
  templateUrl: './tulsa.component.html',
  styleUrls: ['./tulsa.component.css']
})
export class TulsaComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
  var observable=this._httpService.getPath(this.route.url.value[0].path);
  observable.subscribe((x)=>{
    // this.route.params.subscribe(y=>{
    //   console.log(y);
    // })
    console.log(x);
    this.data=x;
    console.log("data",this.data);
  });
  }

}
