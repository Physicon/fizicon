import { ProductList } from '../../models/product-list';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
      <div class="pure-g" >
        <form>
          <div class="currency-control pure-u-1">
            <input name="currency" id="rubles" class="currency-form__radio" type="radio" [(ngModel)]="currency" value="rubles">
              <label class="currency-form__label" for="rubles"> Рубли </label>
            <input name="currency" id="bonus" class="currency-form__radio" type="radio" [(ngModel)]="currency" value="bonus">
              <label class="currency-form__label" for="bonus"> Бонусы </label>
          </div>
        </form>
      </div>
      <div class="pure-g product-list">
          <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5"
              *ngFor="let item of product_list">
              <app-product [product]="item" [currency]="currency"></app-product>
          </div>
      </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() product_list: ProductList;

  currency = 'rubles';

  constructor() { }

  ngOnInit() {

  }
}
