import { Injectable } from '@angular/core';
import {Employee} from "../model/employee";
import {Position} from "../model/position";
import {EducationDegree} from "../model/education-degree";
import {Division} from "../model/division";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   employeeList: Employee[] | undefined ;


  constructor() {

  }

  getAll(){
    this.employeeList=[];
    this.employeeList.push(new Employee(1,"Nguyễn Văn A","01/01/2000","097243249",
      "090243243","a@gmail.com",new Position(1,"Lễ tân"),new EducationDegree(2,"Cao đẳng"),
      new Division(3,"Phục vụ"),2000));
    this.employeeList.push(new Employee(2,"Nguyễn Văn B","01/01/2000","097243249",
      "090243243","a@gmail.com",new Position(4,"Giám sát"),new EducationDegree(3,"Đại học"),
      new Division(3,"Phục vụ"),2000));
    this.employeeList.push(new Employee(3,"Nguyễn Văn C","01/01/2000","097243249",
      "090243243","a@gmail.com",new Position(2,"Phục vụ"),new EducationDegree(1,"Trung cấp"),
      new Division(4,"Quản lý"),2000));
    return this.employeeList;
  }
}
