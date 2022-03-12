import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
    customer: Customer
  constructor(private customerService: CustomerService,
              @Inject(MAT_DIALOG_DATA) public data: string,
              public dialogRef: MatDialogRef<CustomerDeleteComponent>,
              ) { }

  ngOnInit(): void {
    // this.customer = this.customerService.findById(this.data);
  }

  delete(id: string){
    this.customerService.deleteCustomer(id);
    this.cancel();
  }
  cancel(){
      this.dialogRef.close();
  }

}
