import { Component } from '@angular/core';
import { productsFake } from 'src/data/products';
import {favoriteProductsFake } from 'src/data/products';
import { category } from 'src/data/products';
@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent {
  favoriteProducts = favoriteProductsFake
  products =productsFake
  category = category
  
}
