import { Inject, Injectable, resolveForwardRef } from "@angular/core";
import { Product } from "../../models/product";
import { DataService } from "./dataservice";
import { PRODUCT_URL_TOKEN } from "../../config/appconstants";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ApiResponse } from "../../models/apiresponse";

@Injectable()
export class ProductService implements DataService {
    //private url: string = ''

    constructor(
        @Inject(PRODUCT_URL_TOKEN) private _url: string,
        private _http: HttpClient
    ) {
        //this.url = _url
        console.log('service created')
    }

    getProducts(): Observable<Product[]> {
        const obs: Observable<Product[]> = this._http.get<Product[]>(this._url)
        return obs;
    }
    getProductById(id: string): Observable<Product> {
        return this._http.get<Product>(`${this._url}/${id}`)
        // const obs: Observable<any> = this._http.get(`${this._url}/${id}`)
        // const resObs: Observable<Product> = obs.pipe(
        //     map(
        //         (responseData: any): Product => {
        //             return {
        //                 id: responseData.id,
        //                 productCode: responseData.productCode,
        //                 productName: responseData.productName,
        //                 description: responseData.description,
        //                 releaseDate: responseData.releaseDate,
        //                 price: responseData.price,
        //                 starRating: responseData.starRating,
        //                 imageUrl: responseData.imageUrl
        //             }
        //         }
        //     )
        // )
        //return resObs
    }
    addProduct(product: Product): Observable<ApiResponse<Product>> {
        const obs = this._http.post(this._url, product)
        const resObs = obs.pipe(
            map(
                (responseData): ApiResponse<Product> => {
                    return {
                        statusCode: 201,
                        statusText: 'created',
                        data: <Product>responseData
                    }
                }
            )
        )
        return resObs
    }
    updateProduct(product: Product, id: string) {

    }
    deleteProduct(id: string) {

    }
}