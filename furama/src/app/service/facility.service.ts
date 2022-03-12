import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {RentType} from "../model/rent-type";
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL =`${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class FacilityService {



  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<Facility[]>{
   return this.httpClient.get<Facility[]>(API_URL + '/facility');
  }
}
