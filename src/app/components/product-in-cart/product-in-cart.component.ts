import { Component } from '@angular/core';
import { IProducts } from 'src/common/products';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css'],
})
export class ProductInCartComponent {
  fakeData: IProducts = {
    id: "1",
    name: 'Tra buoi',
    price: 2000,
    desc: 'Tra buoi to',
    imageUrl:
      'https://bizweb.dktcdn.net/thumb/large/100/270/285/products/07-550de86d-8a95-4083-8490-8ee5fcb930c6.jpg?v=1510561744770',
  };
}



