import { ProductList } from '../../models/product-list';
import { StorageService } from '../../services/storage.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="container">
      <div class="pure-g" >  
        <form class="currency-form">
          <div class="pure-u-1"> Показать цены:
            <input name="currency" type="radio" [(ngModel)]="currency" value="rubles" /> Рубли
            <input name="currency" type="radio" [(ngModel)]="currency" value="bonus"/> Бонусы
          </div>
        </form>
      </div>
      <div class="pure-g">
          <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5" 
              *ngFor="let item of product_list?.getAll()"> 
              <app-product [product]="item" [currency]="currency"></app-product>
          </div>
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
