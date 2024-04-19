import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/appconstants';
import { DataService } from '../../services/dataservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  updateForm?: FormGroup;

  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService,
    private _builder: FormBuilder
  ) { }

  get productId() {
    return this.updateForm?.get('productId')
  }

  get productName() {
    return this.updateForm?.get('productName')
  }

  get productCode() {
    return this.updateForm?.get('productCode')
  }

  get description() {
    return this.updateForm?.get('description')
  }

  get releaseDate() {
    return this.updateForm?.get('releaseDate')
  }

  get price() {
    return this.updateForm?.get('price')
  }

  get imageUrl() {
    return this.updateForm?.get('imageUrl')
  }

  get starRating() {
    return this.updateForm?.get('starRating')
  }

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
          },
          complete: () => {
            if (this.productInfo) {

              const { productId, productCode, productName, price, description, releaseDate, imageUrl, starRating } = this.productInfo

              this.updateForm = this._builder.group({
                productId: [productId],
                productName: [productName, Validators.required],
                productCode: [productCode, Validators.required],
                price: [price, Validators.required],
                description: [description, Validators.required],
                releaseDate: [releaseDate, Validators.required],
                imageUrl: [imageUrl, Validators.required],
                starRating: [starRating, Validators.required]
              })
            }
          }
        })
  }
}
