import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {RentTypeService} from '../../service/rent-type.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentTypes: RentType[];
  facilityCreateForm = new FormGroup({
    id: new FormControl('',[Validators.required,Validators.pattern('^DV-\\d{4}$')]),
    name: new FormControl('',[Validators.required]),
    area: new FormControl('',[Validators.required,Validators.min(0)]),
    cost: new FormControl('',[Validators.required,Validators.min(0)]),
    maxOfPeople: new FormControl('',[Validators.required,Validators.min(0)]),
    rentType: new FormControl('',Validators.required),
  });
  constructor(private rentTypeService: RentTypeService) { }

  ngOnInit(): void {
    this.rentTypes=this.rentTypeService.getAll();
  }

}
