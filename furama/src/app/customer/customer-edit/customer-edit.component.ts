import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEditForm: FormGroup;
  customerTypeList: CustomerType[];


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
   const id = this.activatedRoute.snapshot.params.id;
   const customer =this.customerService.findById(id);

    this.customerEditForm= new FormGroup({
      id: new FormControl(customer.id, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl(customer.name,Validators.required),
      birthday: new FormControl(customer.birthday,Validators.required),
      gender: new FormControl(customer.gender,Validators.required),
      idCard: new FormControl(customer.idCard,[Validators.pattern('^(\\d{9}|\\d{12})$')]),
      phone: new FormControl(customer.phone,[Validators.required,Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91){1}\\d{7}$')]),
      email: new FormControl(customer.email,[Validators.required,Validators.email]),
      customerType: new FormControl(customer.customerType.id,Validators.required),
      address: new FormControl(customer.address,Validators.required),
    });

     this.customerTypeList = this.customerTypeService.getAll();
  }
  onSubmit(){
    console.log(this.customerEditForm);
  }
}
