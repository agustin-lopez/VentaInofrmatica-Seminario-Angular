import { Injectable } from '@angular/core';
import { PRODUCT } from './product-list/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private _cartList: PRODUCT[] = [];
  cartList: BehaviorSubject<PRODUCT[]> = new BehaviorSubject(this._cartList);

  addToCart(product: PRODUCT) {
    let item: PRODUCT = this._cartList.find((v1) => v1.name == product.name)!;
    if (!item) {
      this._cartList.push({ ... product });
    }
    else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
    console.log(this._cartList);
  }

  constructor() {}
}
