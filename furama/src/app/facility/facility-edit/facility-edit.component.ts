import { Component, OnInit } from '@angular/core';
import {RentType} from '../../model/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentTypeService} from '../../service/rent-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  rentTypes: RentType[];
  facilityCreateForm:  FormGroup;

  constructor(private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.rentTypes=this.rentTypeService.getAll();
    const id= this.activatedRoute.snapshot.params.id;
    const facility= this.facilityService.findById(id);


    this.facilityCreateForm = new FormGroup({
      id: new FormControl(facility.id,[Validators.required,Validators.pattern('^DV-\\d{4}$')]),
      name: new FormControl(facility.name,[Validators.required]),
      area: new FormControl(facility.area,[Validators.required,Validators.min(0)]),
      cost: new FormControl(facility.cost,[Validators.required,Validators.min(0)]),
      maxOfPeople: new FormControl(facility.maxOfPeople,[Validators.required,Validators.min(0)]),
      rentType: new FormControl(facility.rentType.id,Validators.required),
    });
  }

}
