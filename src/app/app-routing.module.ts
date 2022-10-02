import { ProductShoppingComponent } from './product-shopping/product-shopping.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },

  {
    path: 'products',
    component: ProductShoppingComponent,
  },

  {
    path: 'support',
    component: TechnicalSupportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
