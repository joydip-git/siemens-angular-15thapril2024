import { Component } from '@angular/core';
import { products } from '../../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productRecords = products
  filterText = ''

  updateFilterText(newText: string) {
    console.log(newText)
    this.filterText = newText
  }
}
