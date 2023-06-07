import { Component } from '@angular/core'
import { productsFake } from 'src/data/products'
import { favoriteProductsFake } from 'src/data/products'
import { HttpClient } from '@angular/common/http'
import { IProducts } from 'src/common/products'

@Component({
   selector: 'app-listproducts',
   templateUrl: './listproducts.component.html',
   styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {
   products = productsFake
   favoriteProducts = favoriteProductsFake

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

   deleteProduct(id: any): void {
      const confirm = window.confirm('bạn chắc chưa')
      if (confirm) {
         const apiUrl = `http://localhost:8000/api/products/${id}`
         this.http
            .delete(apiUrl, {
               headers: {
                  authorization: 'Bearer' + JSON.stringify(localStorage.getItem('token'))
               }
            })
            .subscribe((res: any) => {
               console.log(res)
               this.adminProducts = this.adminProducts.filter((product: any) => id !== product._id)
            })
      }
   }
}
