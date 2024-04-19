import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  addForm: FormGroup;

  constructor(private _builder: FormBuilder) {
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

  }
}
