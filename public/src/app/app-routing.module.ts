import { TaskComponent } from './task/task.component';
import { TulsaComponent } from './tulsa/tulsa.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'task',component: TaskComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'district of columbia',component: DcComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'tulsa',component: TulsaComponent },
  { path: 'san jose',component:SanjoseComponent },
  { path: 'seattle',component: SeattleComponent },
  
  { path: '', pathMatch: 'full', redirectTo: '/tulsa' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }