import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CartService } from '../cart.service';
import { PRODUCT } from '../product-list/products';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})

export class ProductCartComponent implements OnInit {

  cartList$!: Observable<PRODUCT[]>;

  constructor(private cart: CartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
