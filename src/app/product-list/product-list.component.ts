import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductDataService } from '../product-data.service';
import { PRODUCT } from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: PRODUCT[] = [];

  constructor(private cart: CartService, private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.productDataService.getAllProducts()
      .subscribe(products => this.products = products);
  }


  addToCart (product: PRODUCT): void {
    if (product.quantity != 0) {
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }

}

/* POR SI SE LLEGA A BORRAR EL MOCK... 
[
  {
    "name": "Ryzen 3 3200G",
    "brand": "AMD",
    "component_type": "CPU",
    "stock": 0,
    "price": 33600,
    "id": "1"
  },
  {
    "name": "i7 7700K",
    "brand": "Intel",
    "component_type": "CPU",
    "stock": 4,
    "price": 60000,
    "id": "2"
  },
  {
    "name": "B450M-A Prime",
    "brand": "Asus",
    "component_type": "Motherboard",
    "stock": 7,
    "price": 19.7,
    "id": "3"
  },
  {
    "name": "X20",
    "brand": "Sentey",
    "component_type": "Case",
    "stock": 10,
    "price": 15000,
    "id": "4"
  },
  {
    "name": "RM850x",
    "brand": "Corsair",
    "component_type": "PSU",
    "stock": 8,
    "price": 36000,
    "id": "5"
  },
  {
    "name": "RX 6600",
    "brand": "XFX",
    "component_type": "GPU",
    "stock": 3,
    "price": 75000,
    "id": "6"
  }
] */
