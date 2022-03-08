import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeListComponent} from "../employee/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "../employee/employee-create/employee-create.component";
import {EmployeeEditComponent} from "../employee/employee-edit/employee-edit.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";

const routes: Routes = [
  {path: "facility", component: FacilityListComponent},
  {path: "create", component: FacilityCreateComponent},
  {path: "edit/:id", component: FacilityEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FacilityRoutingModule { }
