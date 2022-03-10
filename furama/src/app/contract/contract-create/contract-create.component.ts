import {Component, OnInit} from '@angular/core';
import {FormControl , Validators} from "@angular/forms";
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractForm = new FormGroup({

    id: new FormControl('', Validators.required),
    dateStart: new FormControl('',Validators.required),
    dateEnd: new FormControl('',Validators.required),
    deposit: new FormControl('',Validators.min(0)),
    totalMoney: new FormControl('',Validators.min(0)),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.contractForm);
  }

}
