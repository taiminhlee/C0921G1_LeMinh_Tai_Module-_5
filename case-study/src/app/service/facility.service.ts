import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
   facilityList: Facility[] | undefined ;


  constructor() {

  }

  getAll(){
    this.facilityList =[];
    this.facilityList.push(new Facility("DV-0001","abc",1200,2000,3,new RentType(1,"year"),""));
    this.facilityList.push(new Facility("DV-0002","xyz",1100,1000,3,new RentType(2,"month"),""));
    this.facilityList.push(new Facility("DV-0003","kmn",1000,3000,4,new RentType(3,"day"),""));
    return this.facilityList
  }
}
