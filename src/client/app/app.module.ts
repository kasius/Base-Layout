import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { LiquidateModule } from './liquidations/liquidations.module';

import { ApiResource } from './services/api.services';
import { EmployeeService } from './services/employee.services';
import { LiquidateService } from './services/liquidate.services';
import { ToastrService } from 'toastr-ng2';


@NgModule({
  imports: [BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    SharedModule.forRoot(),
    LiquidateModule],
  declarations: [AppComponent],
  providers: [EmployeeService,
    LiquidateService,
    ToastrService,
    ApiResource,
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }],
  bootstrap: [AppComponent]

})
export class AppModule { }


