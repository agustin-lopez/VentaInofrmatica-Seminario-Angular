import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PRODUCT } from './product-list/products';

const URL = 'https://6339f105471b8c3955686e8d.mockapi.io/api/products/';

@Injectable({
  providedIn: 'root'
})
 
export class ProductDataService {

  constructor(private http: HttpClient) { }


  public getAllProducts(): Observable<PRODUCT[]> {
    return this.http.get<PRODUCT[]>(URL)
      .pipe(
        tap( (products: PRODUCT[]) => products.forEach(product => product.quantity = 0) )
      );
  }

}
