import { Product } from './product';
import * as flatten from '../../../node_modules/array-flatten';

export class ProductList {

    full_list: Product[];
    filtered_list: Product[];

    constructor(full_list: Product[]) {
        this.full_list = full_list;
        this.filtered_list = full_list;
    }

    getAll() {
        return this.full_list;
    }

    filter(filters) {
        const filter = (array, filter) => array.filter(item => {
            if (!filter.value) {
                return true;
            }
            if (Array.isArray(item[filter.param])) {
                return item[filter.param].includes(filter.value);
            }
            return item[filter.param] === filter.value;
        });
        this.filtered_list = filters.reduce((acc, item) => {

            return filter(acc, item);

        }, this.full_list)
    }

    getSubjects() {
        const subjects = this.filtered_list.map(item => item.subject);
        return [...new Set(subjects)].sort();
    }

    getGenres() {
        const genres = this.filtered_list.map(item => item.genre);
        return [...new Set(genres)].sort();
    }

    getGrades() {
        const grades = flatten(this.filtered_list.map(item => item.grade));
        return [...new Set(grades)].sort((a, b) => Number(a) - Number(b));
    }

}