import { Observable } from "rxjs";
import { Product } from "../../models/product";
import { ApiResponse } from "../../models/apiresponse";

export interface DataService {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProductById(id: number): Observable<ApiResponse<Product>>;
    addProduct(product: Product): Observable<ApiResponse<Product[]>>;
    updateProduct(product: Product, id: number): Observable<ApiResponse<Product[]>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[]>>;
}