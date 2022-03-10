import { Injectable } from '@angular/core';
import {Contract} from "../model/contract";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {Facility} from "../model/facility";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] | undefined;
  constructor() { }

  getAll(){
    this.contractList=[];
    this.contractList.push(new Contract(1,new Customer("KH-0022", "Nguyễn Văn A", "2020-02-02", 1,
      "0238472342", "090234241", "a@gmail.com", new CustomerType(1, "Diamond"), "Đà Nẵng"),
      new Facility("DV-0001","abc",1200,2000,3,new RentType(1,"year"),""),
      "04/08/2022","07/08/2022",200,1000));
    this.contractList.push(new Contract(1,new Customer("KH-1444", "Nguyễn Văn B", "2020-02-02", 1,
      "0238472342", "090234241", "a@gmail.com", new CustomerType(2, "Platinum"), "Đà Nẵng"),
      new Facility("DV-0003","kmn",1000,3000,4,new RentType(3,"day"),""),
      "04/08/2022","07/08/2022",200,3000));
    return this.contractList
  }
}
