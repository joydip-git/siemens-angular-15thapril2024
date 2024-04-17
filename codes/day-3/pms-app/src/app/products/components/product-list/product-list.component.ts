import { Component, Inject } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../services/product.service';
import { DataService } from '../../services/dataservice';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/appconstants';
//import { products } from '../../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  //providers: [ProductService]
})
export class ProductListComponent {
  //productRecords = products
  productRecords?: Product[] = [];
  filterText = ''
  //private ps: DataService;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private _ps: DataService) {
    //this.ps = _ps
  }

  updateFilterText(newText: string) {
    console.log(newText)
    this.filterText = newText
  }
}
