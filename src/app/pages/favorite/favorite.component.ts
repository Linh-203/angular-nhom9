import { Component } from '@angular/core';
import { favoriteProductsFake } from 'src/data/products';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  products = favoriteProductsFake
}
