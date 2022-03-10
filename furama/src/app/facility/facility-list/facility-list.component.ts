import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";
import {RentTypeService} from "../../service/rent-type.service";
import {RentType} from "../../model/rent-type";

@Component({
  selector: 'app-service-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  public facilityList: Facility[] | undefined ;
  public rentTypeList: RentType[] | undefined;
  constructor(private facilityService: FacilityService, private rentTypeService: RentTypeService) { }

  ngOnInit(): void {
    this.facilityList = this.facilityService.getAll();
    this.rentTypeList = this.rentTypeService.getAll();
  }

}
