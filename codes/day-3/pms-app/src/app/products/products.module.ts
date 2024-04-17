import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  //subset of registered members which should be available to other modules
  exports: [ProductListComponent]
})
export class ProductsModule { }
