import { map } from 'rxjs/operators';
import { ProductList } from '../../models/product-list';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../models/product';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-list',
  template: `
  <div class="container">
    <div class="row">
      <div class="product-line"  *ngFor="let row of product_rows" >
        <div class="product" *ngFor="let item of row"> 
            <app-product  [product]="item"></app-product>
        </div>
      </div>
    </div>
  </div>
    
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product_list;
  product_rows;

  constructor(private storageService: StorageService) {

  }

  ngOnInit() {
    this.storageService.getAllCourcesFromAPI().subscribe(data => {
      this.product_list = data;
      this.product_rows = _.chunk(data.getAll(), 5);
    });
  }
}
