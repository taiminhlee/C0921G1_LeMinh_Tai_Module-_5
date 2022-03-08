import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import {ContractRoutingModule} from "./contract/contract-routing.module";
import {HomeComponent} from "./home/home.component";
import {CustomerRoutingModule} from "./customer/customer-routing.module";
import {EmployeeRoutingModule} from "./employee/employee-routing.module";
import {FacilityRoutingModule} from "./facility/facility-routing.module";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contract",loadChildren: () => import("./contract/contract-routing.module").then(module =>module.ContractRoutingModule)},
  {path: "customer",loadChildren: () => import("./customer/customer-routing.module").then(module =>module.CustomerRoutingModule)},
  {path: "employee",loadChildren: () => import("./employee/employee-routing.module").then(module =>module.EmployeeRoutingModule)},
  {path: "facility",loadChildren: () => import("./facility/facility-routing.module").then(module =>module.FacilityRoutingModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContractRoutingModule,
    CustomerRoutingModule,
    EmployeeRoutingModule,
    FacilityRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
