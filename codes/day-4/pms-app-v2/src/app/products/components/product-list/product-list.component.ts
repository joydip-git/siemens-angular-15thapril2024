import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../models/product';
import { DataService } from '../../services/dataservice';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/appconstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, OnDestroy {
  productRecords?: Product[];
  requestCompleted = false
  errorMessage = ''
  filterText = ''

  private sub?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService) {
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    this.sub =
      this._ps
        .getProducts()
        .subscribe({
          next: (responseData) => {
            if (responseData.data != null) {
              this.productRecords = responseData.data
              this.requestCompleted = true
              this.errorMessage = ''
            } else {
              this.productRecords = undefined
              this.requestCompleted = true
              this.errorMessage = responseData.message
            }
          },
          error: (e) => {
            this.productRecords = undefined
            this.errorMessage = e.message
            this.requestCompleted = true
          }
        })
  }

  updateFilterText(newText: string) {
    console.log(newText)
    this.filterText = newText
  }
}
