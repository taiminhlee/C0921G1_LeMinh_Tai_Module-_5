import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {Contract} from '../../model/contract';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[];

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(contracts =>{
      this.contractList = contracts;
    })

  }



}
