import { Product } from './product';
import * as flatten from '../../../node_modules/array-flatten';

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

    getSubjects() {
        const subjects = this.products.map(item => item.subject);
        return [...new Set(subjects)].sort();
    }

    getGenres() {
        const genres = this.products.map(item => item.genre);
        return [...new Set(genres)].sort();
    }

    getGrades() {
        const grades = flatten(this.products.map(item => item.grade));
        return [...new Set(grades)].sort((a, b) => Number(a) - Number(b));
    }

}