import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customerList: Customer[];
  public customerTypeList: CustomerType[];


  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.getAllCustomerType();
    this.customerService.getALl().subscribe(customers => {
      this.customerList = customers;
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypeList = customerTypes;
    });
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(CustomerDeleteComponent, {
      width: 'max-content',
      height: 'max-content',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {

  })
}
}
