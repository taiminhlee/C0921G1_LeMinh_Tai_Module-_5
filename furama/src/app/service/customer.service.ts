import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   customerList: Customer[];



  constructor(private httpClient: HttpClient) {

  }

  public getALl(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer')
  }

  public findById(id: string): Observable<Customer>{
    return this.httpClient.get<Customer>(`${API_URL}/product/${id}`);
  }

  public deleteCustomer(id: string): void{
    for (let i=0; i<this.customerList.length;i++){
      if (this.customerList[i].id===id){
        this.customerList.splice(i,1);
      }
    }
  }


  save(object: Customer): Observable<void>{
     return this.httpClient.post<void>(this.httpClient + '/' , object);
  }

  edit(object: Customer): Observable<void>{
    return this.httpClient.patch<void>(this.httpClient + '/' + object.id, object);
  }
}
