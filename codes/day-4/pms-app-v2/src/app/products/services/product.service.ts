import { Inject, Injectable } from "@angular/core";
import { Product } from "../../models/product";
import { DataService } from "./dataservice";
import { PRODUCT_URL_TOKEN } from "../../config/appconstants";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../../models/apiresponse";

@Injectable()
export class ProductService implements DataService {

    constructor(
        @Inject(PRODUCT_URL_TOKEN) private _url: string,
        private _http: HttpClient
    ) { }

    getProducts(): Observable<ApiResponse<Product[]>> {
        return this._http.get<ApiResponse<Product[]>>(this._url)
    }

    getProductById(id: number): Observable<ApiResponse<Product>> {
        return this._http.get<ApiResponse<Product>>(`${this._url}/${id}`)
    }

    addProduct(product: Product): Observable<ApiResponse<Product[]>> {
        return this._http.post<ApiResponse<Product[]>>(this._url, product)
    }
    updateProduct(product: Product, id: number): Observable<ApiResponse<Product[]>> {
        return this._http.put<ApiResponse<Product[]>>(`${this._url}/${id}`, product)
    }
    deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
        return this._http.delete<ApiResponse<Product[]>>(`${this._url}/${id}`)
    }
}