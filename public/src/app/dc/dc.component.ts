import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  data:any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
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
