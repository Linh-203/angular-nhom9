import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'

@Component({
   selector: 'app-listcate',
   templateUrl: './listcate.component.html',
   styleUrls: ['./listcate.component.css']
})
export class ListcateComponent {
   constructor(private http: HttpClient) {}

   ngOnInit(): void {
      this.getAllCate()
   }

   adminCate: any

   getAllCate(): void {
      const limit = 140 // lấy toàn bộ sản phẩm
      const apiUrl = `http://localhost:8000/api/categories?_limit=${limit}`
      this.http.get(apiUrl).subscribe((res: any) => {
         console.log(res)
         this.adminCate = res.categories
      })
   }
   deleteCate(id: any): void {
      const apiUrl = `http://localhost:8000/api/categories/${id}`
      this.http
         .delete(apiUrl, {
            headers: {
               authorization: 'Bearer' + JSON.stringify(localStorage.getItem('token'))
            }
         })
         .subscribe((res: any) => {
            console.log(res)
            this.adminCate = this.adminCate.filter((cate: any) => id !== cate._id)
         })
   }
}
