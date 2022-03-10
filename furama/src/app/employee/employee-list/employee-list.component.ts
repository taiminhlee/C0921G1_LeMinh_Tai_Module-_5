import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {Position} from "../../model/position";
import {EducationDegree} from "../../model/education-degree";
import {Division} from "../../model/division";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {DivisionService} from "../../service/division.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Employee[] | undefined;
  public positionList: Position[] | undefined;
  public educationList: EducationDegree[] | undefined;
  public division: Division[] | undefined;


  constructor(
              private employeeService: EmployeeService, private positionService: PositionService,
              private educationDegreeService: EducationDegreeService, private divisionService: DivisionService) {

  }

  ngOnInit(): void {
    this.employeeList=this.employeeService.getAll();
    this.positionList=this.positionService.getAll();
    this.educationList=this.educationDegreeService.getAll();
    this.division=this.divisionService.getAll();
  }

}
