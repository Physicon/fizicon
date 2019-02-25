import { ProductList } from './models/product-list';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  product_list: ProductList;
  grades;
  subjects;
  genres;
  bonus_mode = false;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.getAllCourcesFromAPI().subscribe(data => {
      this.product_list = data;
      this.grades = data.getGrades();
      this.subjects = data.getSubjects();
      this.genres = data.getGenres();
    });
  }

  handleFilters(filters) {
    console.log(filters);
  }
}
