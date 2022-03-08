import { Injectable } from '@angular/core';
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
   rentTypeList: RentType[] | undefined ;


  constructor() {

  }

  getAll(){
    this.rentTypeList=[];
    this.rentTypeList.push(new RentType(1,"year"));
    this.rentTypeList.push(new RentType(2,"month"));
    this.rentTypeList.push(new RentType(3,"day"));
    this.rentTypeList.push(new RentType(4,"hour"));
    return this.rentTypeList
  }
}
