import { Component } from '@angular/core';
import { productsFake } from 'src/data/products';
import {favoriteProductsFake } from 'src/data/products';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {
  products =productsFake
  favoriteProducts = favoriteProductsFake
}
