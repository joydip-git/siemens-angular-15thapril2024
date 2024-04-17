import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { DataService } from './services/dataservice'
import { ProductService } from './services/product.service';
import { PRODUCT_SERVICE_TOKEN, PRODUCT_URL, PRODUCT_URL_TOKEN, SERVICE_TYPE_NAME } from '../config/appconstants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    FilterProductComponent,
    ProductsFilterPipe
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    // ProductService
    //default
    // {
    //   provide: ProductService,
    //   useClass: ProductService
    // },
    //use existing instance/value
    // {
    //   provide: PRODUCT_SERVICE_TOKEN,
    //   useExisting: new ProductService('')
    // },
    //using factory method
    // {
    //   provide: PRODUCT_SERVICE_TOKEN,
    //   useFactory: () => { }
    // }
    //using class type name
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: SERVICE_TYPE_NAME
    },
    //using a predefined value
    {
      provide: PRODUCT_URL_TOKEN,
      useValue: PRODUCT_URL
    }
  ],
  bootstrap: [],
  //subset of registered members which should be available to other modules
  exports: [ProductListComponent]
})
export class ProductsModule { }
