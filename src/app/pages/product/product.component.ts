import { Component } from '@angular/core';
import { productsFake } from 'src/data/products';
import {favoriteProductsFake } from 'src/data/products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products =productsFake
  
  favoriteProducts = favoriteProductsFake
}
