import { Component } from '@angular/core';
import { IProducts } from 'src/common/products';
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
  products: IProducts[] = [
    {
      id: 1,
      name: 'banh mi',
      price: 25,
      desc: 'banh mi rat ngon',
      imageUrl:
        'https://cdn.tgdd.vn/Files/2021/07/27/1371175/huong-dan-3-cach-lam-banh-mi-bo-thom-ngon-de-lam-cho-bua-sang-du-chat-202201041019538628.jpg',
    },
    {
      id: 2,
      name: 'tra sua',
      price: 30,
      desc: 'tra sua rat ngon',
      imageUrl:
        'https://cdn.tgdd.vn/Files/2021/08/10/1374160/hoc-cach-pha-tra-sua-o-long-dai-loan-thom-ngon-chuan-vi-ai-cung-me-202108100039248020.jpg',
    },
    {
      id: 3,
      name: 'Kem',
      price: 5,
      desc: 'Kem rat ngon',
      imageUrl: 'https://cdn.tgdd.vn/2020/11/CookProduct/thum-1200x676.jpg',
    },
    // {
    //   id: 4,
    //   name: 'hoa qua',
    //   price: 1,
    //   desc: 'hoa qua rat ngon',
    //   imageUrl: '',
    // },
  ];
  favoriteProducts = [
    {
      id: 1,
      name: 'Sinh tố dâu tây',
      price: 25,
      imageUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/270/285/products/05-a41e0c7f-e4c9-4ad2-9412-1e8c4d79a028.jpg?v=1510561983257',
    },
    {
      id: 2,
      name: 'Trà xanh bưởi',
      price: 30,
      imageUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/270/285/products/07-550de86d-8a95-4083-8490-8ee5fcb930c6.jpg?v=1510561744770',
    },
    {
      id: 3,
      name: 'Hồng trà mật ong',
      price: 5,
      imageUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/270/285/products/2016910153030-tra-olong-sui-bot.jpg?v=1510561084490',
    },
    {
      id: 4,
      name: 'Trà sữa kiwi',
      price: 25,
      imageUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/270/285/products/04-de27bf4e-5fa7-4517-a796-94b7d46d5b4e.jpg?v=1510560499817',
    },
    {
      id: 2,
      name: 'Trà sữa khoai môn',
      price: 30,
      imageUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/270/285/products/11-72b16683-c3bd-4c4f-9ba2-f9b2a5dce3a8.jpg?v=1510560206717',
    },
    {
      id: 3,
      name: 'Trà chanh đài loan',
      price: 5,
      imageUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/270/285/products/2016910154723-tra-xanh-xi-muoi.jpg?v=1510561254037',
    },
    // {
    //   id: 4,
    //   name: 'hoa qua',
    //   price: 1,
    //   desc: 'hoa qua rat ngon',
    //   imageUrl: '',
    // },
  ];
}
