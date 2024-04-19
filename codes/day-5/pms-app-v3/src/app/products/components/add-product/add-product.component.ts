import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../models/product';
import { DataService } from '../../services/dataservice';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/appconstants';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnDestroy {
  addForm: FormGroup;
  private sub?: Subscription;

  constructor(
    private _builder: FormBuilder,
    @Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService,
    private _router: Router
  ) {
    this.addForm = this._builder.group({
      productId: [0, Validators.required],
      productName: ['enter product name', Validators.required],
      productCode: ['enter product code', Validators.required],
      price: [0, Validators.required],
      description: ['enter description', Validators.required],
      releaseDate: ['enter date', Validators.required],
      imageUrl: ['enter url', Validators.required],
      starRating: [0, Validators.required]
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  get productId() {
    return this.addForm?.get('productId')
  }

  get productName() {
    return this.addForm?.get('productName')
  }

  get productCode() {
    return this.addForm?.get('productCode')
  }

  get description() {
    return this.addForm?.get('description')
  }

  get releaseDate() {
    return this.addForm?.get('releaseDate')
  }

  get price() {
    return this.addForm?.get('price')
  }

  get imageUrl() {
    return this.addForm?.get('imageUrl')
  }

  get starRating() {
    return this.addForm?.get('starRating')
  }

  submit() {
    if (confirm('would you like to add?')) {
      const product = <Product>this.addForm.value

      this.sub =
        this._ps
          .addProduct(product)
          .subscribe({
            next: (response) => {
              alert(response.message)

              if (response.data != null) {
                //redirect
                this._router.navigate(['/products'])
              }
            },
            error: (e) => alert(e.message)
          })

    }
  }
}
