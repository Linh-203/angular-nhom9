import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {
  constructor(private http: HttpClient) {}

 
  ngOnInit(id:any): void {

    this.getProduct();
    // this.deleteProduct(id)
  }

  filteredProducts:any;


  getProduct(): void {
    const apiUrl = `http://localhost:8000/api/products`;
    this.http.get(apiUrl).subscribe((res: any) => {
      
      this.filteredProducts = res.docs;
     
    });
  }

  // deleteProduct(id:any): void {
  //   const apiUrl = `http://localhost:8000/api/products/${id}`;
  //   const confirm = window.confirm("Xóa")
  //   if(confirm){

  //     this.http.delete(apiUrl).subscribe((res: any) => {
  //       this.getProduct()
  //       this.filteredProducts = res.docs;
        
       
  //     });
  //   }
  // }

}
