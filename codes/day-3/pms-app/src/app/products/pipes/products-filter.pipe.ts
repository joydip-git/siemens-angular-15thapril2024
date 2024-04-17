import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../../models/product";

@Pipe({
    name: 'productsfilter'
})
export class ProductsFilterPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        const filterByText = args[0]
        if (filterByText && filterByText != '' && value.length > 0) {
            const filteredProducts = value.filter(p => p.productName.toLocaleLowerCase().includes(filterByText.toLocaleLowerCase()))
            return filteredProducts
        } else
            return value
    }
}