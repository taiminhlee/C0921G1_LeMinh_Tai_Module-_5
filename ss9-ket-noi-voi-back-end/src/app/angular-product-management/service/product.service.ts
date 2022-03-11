import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/productList');
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/productList', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/productList/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.patch<Product>(`${API_URL}/productList/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/productList/${id}`);
  }
}
