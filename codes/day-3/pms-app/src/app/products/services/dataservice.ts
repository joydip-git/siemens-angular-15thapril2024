import { Product } from "../../models/product";

export interface DataService {
    getProducts(): void;
    getProductById(id: number): void;
    addProduct(product: Product): void;
    updateProduct(product: Product, id: number): void;
    deleteProduct(id: number): void;
}