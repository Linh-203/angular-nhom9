import { Component, ViewChild } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Component({
   selector: 'app-listproducts',
   templateUrl: './listproducts.component.html',
   styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {
   constructor(private http: HttpClient) {}

   ngOnInit(): void {
      this.getAllProducts()
   }

   adminProducts: any

   getAllProducts(): void {
      const limit = 140 // lấy toàn bộ sản phẩm
      const apiUrl = `http://localhost:8000/api/products?_limit=${limit}`
      this.http.get(apiUrl).subscribe((res: any) => {
         console.log(res)
         this.adminProducts = res.docs
      })
   }
}
