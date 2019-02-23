import { ProductList } from './../models/product-list';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) {
  }

  getAllCourcesFromAPI() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { 'data': '' }

    return this.http
      .post(`http://krapipl.imumk.ru:8082/api/mobilev1/update`,
        body,
        { headers: headers })
      .pipe(
        map(
          data => {
            if (data['errorMessage']) {
              throw new Error(data['errorMessage']);
            }
            const items = data['items'];
            return new ProductList(items.map(item => new Product(item)));
          }
        )
      );
  }

}
