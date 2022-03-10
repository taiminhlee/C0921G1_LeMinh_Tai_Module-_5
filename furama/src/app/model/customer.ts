import {CustomerType} from "./customer-type";

export class Customer {
  id: string;
  name: string;
  birthday: string;
  gender: number;
  idCard: string;
  phone: string;
  email: string;
  customerType: CustomerType;
  address: string;


  constructor(id: string, name: string, birthday: string, gender: number, idCard: string, phone: string, email: string, customerType: CustomerType, address: string) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.customerType = customerType;
    this.address = address;
  }
}
