import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   customerList: Customer[] | undefined  ;


  constructor() {

  }

  public getALl() {
    this.customerList = [];
    this.customerList.push(
      new Customer("KH-0022", "Nguyễn Văn A", "2020-02-02", 1,
        "0238472342", "090234241", "a@gmail.com", new CustomerType(1, "Diamond"), "Đà Nẵng"));
    this.customerList.push(
      new Customer("KH-1444", "Nguyễn Văn B", "2020-02-02", 1,
        "0238472342", "090234241", "a@gmail.com", new CustomerType(2, "Platinum"), "Đà Nẵng"));
    this.customerList.push(
      new Customer("KH-4552", "Nguyễn Văn C", "2020-02-02", 0,
        "0238472342", "090234241", "a@gmail.com", new CustomerType(3, "Gold"), "Đà Nẵng"));
    return this.customerList;
  }
}
