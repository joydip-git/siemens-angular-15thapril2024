import { Observable } from "rxjs";
import { Product } from "../../models/product";
import { ApiResponse } from "../../models/apiresponse";

export interface DataService {
    getProducts(): Observable<Product[]>;
    getProductById(id: string): Observable<Product>;
    addProduct(product: Product): Observable<ApiResponse<Product>>;
    updateProduct(product: Product, id: string): void;
    deleteProduct(id: string): void;
}