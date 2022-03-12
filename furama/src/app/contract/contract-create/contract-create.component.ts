import {Component, OnInit} from '@angular/core';
import {FormControl , Validators} from "@angular/forms";
import {FormGroup} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  customerList: Customer[];
  facilityList: Facility[];
  contractForm = new FormGroup({

    id: new FormControl('', Validators.required),
    dateStart: new FormControl('',Validators.required),
    dateEnd: new FormControl('',Validators.required),
    deposit: new FormControl('',Validators.min(0)),
    totalMoney: new FormControl('',Validators.min(0)),
  });

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.customerList;
    this.getAllFacility();
  }

  onSubmit(){
    console.log(this.contractForm);
  }

  getAllCustomer(){
    this.customerService.getALl().subscribe(customers =>{
      this.customerList = customers
    })
  }

  getAllFacility(){
    this.facilityService.getAll().subscribe(facilities =>{
      this.facilityList = facilities
    })
  }

}
