import { Component } from '@angular/core';
import { productsFake } from 'src/data/products';
import {favoriteProductsFake } from 'src/data/products';
import { IUser } from 'src/common/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit(): void {
    this.getData()
  }
   
   products =productsFake
   constructor( private http: HttpClient) { }

  favoriteProducts:any
  getData() {
    let apiUrl = "http://localhost:8000/api/products";
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response);
        this.favoriteProducts = response.docs;
        console.log(this.products);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
