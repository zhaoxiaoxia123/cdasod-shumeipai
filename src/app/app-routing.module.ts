import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleElectricComponent} from "./vehicle-electric/vehicle-electric.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component : LoginComponent },
  { path: 'veh', component : VehicleElectricComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
