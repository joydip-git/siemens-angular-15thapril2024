import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product';
import { DataService } from '../../services/dataservice';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/appconstants';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private sub?: Subscription;
  productInfo?: Product;
  requestCompleted = false
  errorMessage = ''

  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService,
    private _router: Router
  ) { }


  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    //this.currentRoute.params
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

  goToUpdate(id: number) {
    this._router.navigate(['/products/update', id])
  }
}
