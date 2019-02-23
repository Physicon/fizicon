import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product',
  template: `
    <div>
      <div class="product-cart">
        <div class="product-cart__image">  
          <img src="{{product.getPictureUrl()}}">
        </div> 
        <div class="product-cart-info">
          <p class="product-cart-info__title">{{product.subject}}</p>
          <p class="product-cart-info__grade">{{product.grade}} класс</p>
          <p class="product-cart-info__genre">{{product.genre}}</p>
          <p class="product-cart-info__readmore">
            <a href="{{product.shopUrl}}">Подробнее</a>
          </p>
          <p class="product-cart__button">
            <button href="#" class="pure-button pure-button-primary btn-fluid">{{product.getPriceTag(currency)}}</button>
          </p>
          
        </div> 

    </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() currency;

  constructor() { }

  ngOnInit() {
  }

}
