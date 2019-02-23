import { map, filter } from 'rxjs/operators';
import { Product } from './product';
export class ProductList {

    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    getAll() {
        return this.products;
    }

    filter(filters) {
        const filter = (array, filter) => array.filter(item => filter.value && item[filter.param] === filter.value);
        return filters.reduce((acc, item) => {
            return filter(acc, item);
        }, this.products)

    }
}