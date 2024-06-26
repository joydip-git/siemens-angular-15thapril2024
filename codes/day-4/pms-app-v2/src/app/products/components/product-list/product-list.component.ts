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
  private deleteSub?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService) {
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
    this.deleteSub?.unsubscribe()
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
    this.filterText = newText
  }

  delete(id: number) {
    if (confirm('would you like to delete?')) {
      this.deleteSub =
        this._ps
          .deleteProduct(id)
          .subscribe({
            next: (response) => {
              if (response.data != null) {
                alert(response.message)
                this.productRecords = response.data
                this.requestCompleted = true
                this.errorMessage = ''
              } else {
                this.productRecords = undefined
                this.requestCompleted = true
                this.errorMessage = response.message
              }
            },
            error: (e) => {
              this.productRecords = undefined
              this.errorMessage = e.message
              this.requestCompleted = true
            }
          })
    } else
      alert('delete cancelled')
  }
}
