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


  searchKeyword: string = '';
  filteredProducts = [...this.favoriteProducts];
  search(e: any) {
    console.log(e.target.searchKeyword.value)
    if(e.target.searchKeyword.value != '') {
    this.filteredProducts = this.favoriteProducts.filter(product => product.name.toLowerCase().includes(e.target.searchKeyword.value.toLowerCase()));

  }
  else{
    this.filteredProducts = [...this.favoriteProducts];
  }
  }


}
