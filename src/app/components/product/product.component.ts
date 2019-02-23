import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div>
      <div>
        <img class="product-cart__image" src="{{product.getPictureUrl()}}">
      </div>  
      {{product | json}}
    </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
