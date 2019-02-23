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
      <div class="pure-g">
          <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5" 
              *ngFor="let item of product_list?.getAll()"> 
              <app-product [product]="item"></app-product>
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
      // this.product_rows = _.chunk(data.getAll(), 5);
    });
  }
}
