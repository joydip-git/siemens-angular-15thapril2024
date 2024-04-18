import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../services/product.service';
import { DataService } from '../../services/dataservice';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/appconstants';
import { Subscription } from 'rxjs';
//import { products } from '../../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  //productRecords = products
  productRecords?: Product[];
  requestCompleted = false
  errorMessage = ''
  filterText = ''
  //private ps: DataService;
  private sub?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService) {
    // this.productRecords = []
    // this.filterText = ''
    //this.ps = _ps
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    setTimeout(
      () => {
        this.sub =
          this._ps
            .getProducts()
            .subscribe({
              next: (responseData) => {
                this.productRecords = responseData
                this.requestCompleted = true
                this.errorMessage = ''
              },
              error: (e) => {
                this.productRecords = undefined
                this.errorMessage = e.message
                this.requestCompleted = true
              }
            })
      },
      2000
    )
  }

  updateFilterText(newText: string) {
    console.log(newText)
    this.filterText = newText
  }
}
