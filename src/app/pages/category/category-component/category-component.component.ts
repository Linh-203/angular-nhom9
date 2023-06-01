import { Component,Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { IProducts } from 'src/common/products';


@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})

export class CategoryComponentComponent {
  @Input() inputData: any;
  products: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
    
    // Khởi tạo một đối tượng sản phẩm mới
   
  }

  getData() {
    let apiUrl = "http://localhost:3000/products";
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response);
        this.products = response;
        console.log(this.products);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  
}
