import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customerList: Customer[] | undefined   ;
  public customerTypeList: CustomerType[] | undefined  ;


  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {

  }

  ngOnInit(): void {
    this.customerList = this.customerService.getALl();

    this.customerTypeList = this.customerTypeService.getAll();
  }

}
