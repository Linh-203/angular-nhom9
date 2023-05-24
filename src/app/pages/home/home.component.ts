import { Component } from '@angular/core';
import { productsFake } from 'src/data/products';
import { favoriteProductsFake } from 'src/data/products';
import { IUser } from 'src/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user: IUser = {
    name: 'linh',
    msv: 'PH28073',
    age: 20,
    gender: 'male',
  };
  products = productsFake

  favoriteProducts = favoriteProductsFake
}
