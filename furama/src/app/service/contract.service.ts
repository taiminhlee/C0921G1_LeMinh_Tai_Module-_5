import { Injectable } from '@angular/core';
import {Contract} from "../model/contract";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {Facility} from "../model/facility";
import {RentType} from "../model/rent-type";
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Contract[]>{
    return this.httpClient.get<Contract[]>(API_URL + '/contract')
  }

}
