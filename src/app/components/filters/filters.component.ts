import { Component, OnInit, Input } from '@angular/core';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Component({
  selector: 'app-filters',
  template: `
    <div class="container">
      <form class="filters-form pure-form pure-form-stacked">
        <div class="pure-g"> 
          <div class="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="pure-input-3-4">
              <option value="">Все предметы</option>
              <option *ngFor="let item of subjects" value="item">{{item}}</option>
            </select>
          </div>
          <div class="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="pure-input-3-4">
              <option value="">Все жанры</option>
              <option *ngFor="let item of genres" value="item">{{item}}</option>
            </select>
          </div>
          <div class="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="pure-input-3-4">
              <option value="">Все классы</option>
              <option *ngFor="let item of grades" value="item">{{item}}</option>
            </select>
          </div>
          <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-4">
            <input class="pure-input-1" type="text" placeholder="Поиск">
          </div>
        </div>  
      </form>
    </div>
  `,
  styles: []
})
export class FiltersComponent implements OnInit {

  @Input() subjects;
  @Input() genres;
  @Input() grades;

  constructor() { }

  ngOnInit() {
  }

}
