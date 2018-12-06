import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgxEchartsModule } from "ngx-echarts";
import { LoginComponent } from './login/login.component';
import { VehicleElectricComponent } from './vehicle-electric/vehicle-electric.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VehicleElectricComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxEchartsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
