import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
import {RouterModule, Routes} from "@angular/router";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: ""},
  {path: "customer", component: CustomerListComponent},
  {path: "customer-create", component: CustomerCreateComponent},
  {path: "customer-edit", component: CustomerEditComponent},
  {path: "service", component: ServiceListComponent},
  {path: "service-create", component: ServiceCreateComponent},
  {path: "service-edit", component: ServiceEditComponent},
  {path: "employee", component: EmployeeListComponent},
  {path: "employee-create", component: EmployeeCreateComponent},
  {path: "employee-edit", component: EmployeeEditComponent},
  {path: "contract", component: ContractListComponent},
  {path: "contract-create", component: ContractCreateComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
