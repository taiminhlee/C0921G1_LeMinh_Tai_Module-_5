import {Customer} from "./customer";
import {Facility} from "./facility";

export class Contract {
  id: number;
  customer: Customer;
  facility: Facility;
  dateStart: string;
  dateEnd: string;
  deposit: number;
  totalMoney: number;


  constructor(id: number, customer: Customer, facility: Facility, dateStart: string, dateEnd: string, deposit: number, totalMoney: number) {
    this.id = id;
    this.customer = customer;
    this.facility = facility;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.deposit = deposit;
    this.totalMoney = totalMoney;
  }
}
