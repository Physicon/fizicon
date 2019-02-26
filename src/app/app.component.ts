import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from './services/storage.service';
import { mergeMap } from 'rxjs/operators';
import { ProductList } from './models/product-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscribtion;
  product_list_manager: ProductList;

  product_list;
  grades;
  subjects;
  genres;
  bonus_mode = false;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.subscribtion = this.storageService.getAllCourcesFromAPI()
      .pipe(mergeMap(data => {
        this.product_list_manager = data;
        return this.product_list_manager.getProductListSream()
      }))
      .subscribe(data => {
        this.product_list = data;
        this.subjects = this.product_list_manager.getSubjects();
        this.genres = this.product_list_manager.getGenres();
        this.grades = this.product_list_manager.getGrades();
      });
  }

  handleFilters(filters) {
    this.product_list_manager.filter(filters);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
