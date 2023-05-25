import { Component, ViewChild } from '@angular/core';
import { productsFake } from 'src/data/products';
import { favoriteProductsFake } from 'src/data/products';
import { IUser } from 'src/common/user';
// import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';
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
  products = productsFake;

  favoriteProducts = favoriteProductsFake;

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  @ViewChild('slickModal') slickModal: any;

  prev() {
    this.slickModal.slickPrev();
  }

  next() {
    this.slickModal.slickNext();
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
