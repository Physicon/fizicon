import { Product } from './product';
import * as flatten from '../../../node_modules/array-flatten';
import { BehaviorSubject } from 'rxjs';

export class ProductList {

    full_list: Product[];
    public filtered_list: BehaviorSubject<Product[]>;

    constructor(full_list: Product[]) {
        this.full_list = full_list;
        this.filtered_list = new BehaviorSubject<Product[]>(full_list);
    }

    getProductListSream() {
        return this.filtered_list;
    }

    filter(filters) {
        const filter = (array, filter) => array.filter(item => {
            if (!filter.value) {
                return true;
            }
            if (Array.isArray(item[filter.key])) {
                return item[filter.param].includes(filter.value);
            }
            if (item[filter.key] = 'search') {
                const string = item.title.toLowerCase();
                const query = filter.value.toLowerCase();
                return ~string.indexOf(query);
            }
            return item[filter.param] === filter.value;
        });

        const new_array = filters.reduce((acc, item) => {

            return filter(acc, item);

        }, this.full_list);

        this.filtered_list.next(new_array);
    }

    getSubjects() {
        const subjects = this.full_list.map(item => item.subject);
        return [...new Set(subjects)].sort();
    }

    getGenres() {
        const genres = this.filtered_list.value.map(item => item.genre);
        return [...new Set(genres)].sort();
    }

    getGrades() {
        const grades = flatten(this.filtered_list.value.map(item => item.grade));
        return [...new Set(grades)].sort((a, b) => Number(a) - Number(b));
    }

}