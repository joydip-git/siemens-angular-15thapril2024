import { Inject, Injectable } from "@angular/core";
import { Product } from "../../models/product";
import { DataService } from "./dataservice";
import { PRODUCT_URL_TOKEN } from "../../config/appconstants";

@Injectable()
export class ProductService implements DataService {
    //private url: string = ''

    constructor(@Inject(PRODUCT_URL_TOKEN) private _url: string) {
        //this.url = _url
        console.log('service created')
    }

    getProducts() {

    }
    getProductById(id: number) {

    }
    addProduct(product: Product) {

    }
    updateProduct(product: Product, id: number) {

    }
    deleteProduct(id: number) {

    }
}