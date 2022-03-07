import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceEditComponent } from './service/service-edit/service-edit.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceListComponent,
    ServiceEditComponent,
    ServiceCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    ContractListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
