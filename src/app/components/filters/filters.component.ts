import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  template: `
    <div class="container">
      <form class="filters-form pure-form pure-form-stacked">
        <div class="pure-g"> 
          <div class="filter-form-select pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="filter-form__select pure-input-1">
              <option value="">Все предметы</option>
              <option *ngFor="let item of subjects" value="item">{{item}}</option>
            </select>
          </div>
          <div class="filter-form-select pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="filter-form__select pure-input-1">
              <option value="">Все жанры</option>
              <option *ngFor="let item of genres" value="item">{{item}}</option>
            </select>
          </div>
          <div class="filter-form-select pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="filter-form__select pure-input-1">
              <option value="">Все классы</option>
              <option *ngFor="let item of grades" value="item">{{item}}</option>
            </select>
          </div>
          <div class="filter-form-select filter-form-search pure-u-1 pure-u-md-1 pure-u-lg-1-4">
            <input class="filter-form__input pure-input-1" type="text" placeholder="Поиск">
           <!-- <button type="submit" class="pure-button"> 
              <i class="fa fa-search fa-2x pure-img" aria-hidden="true" ></i>
            </button> --> 
         </div>
        
        </div>  
      </form>
    </div>
  `,
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() subjects;
  @Input() genres;
  @Input() grades;

  constructor() { }

  ngOnInit() {
  }

}
