import { Injectable } from '@angular/core';
import {EducationDegree} from "../model/education-degree";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {
   educationList: EducationDegree[] | undefined;


  constructor() {

  }

  getAll(){
    this.educationList=[];
    this.educationList.push(new EducationDegree(1,"Trung cấp"));
    this.educationList.push(new EducationDegree(2,"Cao đẳng"));
    this.educationList.push(new EducationDegree(3,"Đại học"));
    this.educationList.push(new EducationDegree(4,"Sau Đại học"));
    return this.educationList
  }
}
