import {Position} from "./position";
import {EducationDegree} from "./education-degree";
import {Division} from "./division";

export class Employee {
  id: number;
  name: string;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  position: Position;
  educationDegree: EducationDegree;
  division: Division;
  salary: number;


  constructor(id: number, name: string, birthday: string, idCard: string, phone: string, email: string, position: Position, educationDegree: EducationDegree, division: Division, salary: number) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.position = position;
    this.educationDegree = educationDegree;
    this.division = division;
    this.salary = salary;
  }
}
