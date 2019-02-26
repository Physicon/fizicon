import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  template: `
    <div class="container">
      <form class="filters-form pure-form pure-form-stacked">
        <div class="pure-g"> 
          <div class="filter-form-select pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="filter-form__select pure-input-1" [(ngModel)]="subject_input" name="subject" (change)="changeHandle()">
              <option value="">Все предметы</option>
              <option *ngFor="let item of subjects" value="{{item}}">{{item}}</option>
            </select>
          </div>
          <div class="filter-form-select pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="filter-form__select pure-input-1" [(ngModel)]="genre_input" (change)="changeHandle()" name="genre">
              <option value="">Все жанры</option>
              <option *ngFor="let item of genres" value="{{item}}">{{item}}</option>
            </select>
          </div>
          <div class="filter-form-select pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
            <select class="filter-form__select pure-input-1" [(ngModel)]="grade_input" (change)="changeHandle()" name="grade">
              <option value="">Все классы</option>
              <option *ngFor="let item of grades" value="{{item}}">{{item}}</option>
            </select>
          </div>
          <div class="filter-form-select filter-form-search pure-u-1 pure-u-md-1 pure-u-lg-1-4">
            <input class="filter-form__input pure-input-1"  [(ngModel)]="search_input" (keyup)="changeHandle()" name="search" type="text" placeholder="Поиск">
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

  @Output() event = new EventEmitter();


  subject_input = "";
  genre_input = "";
  grade_input = "";
  search_input = "";

  constructor() { }

  ngOnInit() {
  }

  changeHandle() {
    this.event.emit([
      { param: 'subject', value: this.subject_input },
      { param: 'genre', value: this.genre_input },
      { param: 'grade', value: this.grade_input },
      { param: 'search', value: this.search_input }
    ]);
  }

}
