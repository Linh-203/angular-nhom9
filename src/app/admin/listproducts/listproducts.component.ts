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
      this.getProduct(1)
   }
   adminProducts: any

   getProduct(page: number): void {
      const limit = 20 // chỉ định số lượng sản phẩm cần lấy
      const apiUrl = `http://localhost:8000/api/products/?_limit=${limit}&_page=${page}`
      this.http.get(apiUrl).subscribe((res: any) => {
         console.log(res)
         this.adminProducts = res.docs
      })
   }
}
