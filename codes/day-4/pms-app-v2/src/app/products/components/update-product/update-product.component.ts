import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/appconstants';
import { DataService } from '../../services/dataservice';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit, OnDestroy {
  private sub?: Subscription;
  productInfo?: Product;
  requestCompleted = false
  errorMessage = ''

  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService
  ) { }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const allParams: Params = snapshot.params
    const id = Number(allParams['id'])
    this.sub =
      this._ps
        .getProductById(id)
        .subscribe({
          next: (response) => {
            if (response.data != null) {
              this.productInfo = response.data
              this.errorMessage = ''
              this.requestCompleted = true
            } else {
              this.productInfo = undefined
              this.errorMessage = response.message
              this.requestCompleted = true
            }
          },
          error: (e) => {
            this.productInfo = undefined
            this.errorMessage = e.message
            this.requestCompleted = true
          }
        })
  }
}
