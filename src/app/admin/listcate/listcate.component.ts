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

   adminCate: any[] = []
   defaultCategory: any = { name: 'defaultCategory' }
   getAllCate(): void {
      const limit = 140 // lấy toàn bộ sản phẩm
      const apiUrl = `http://localhost:8000/api/categories?_limit=${limit}`

      this.http.get(apiUrl).subscribe((res: any) => {
         console.log(res)
         this.adminCate = res.categories.map((cate: any) => {
            if (cate.name === 'defaultCategory') {
               return { ...cate, isDefaultCategory: true } // Thêm thuộc tính isDefaultCategory
            }
            return cate
         })
      })
   }
   deleteCate(id: any): void {
      if (id === this.defaultCategory._id) {
         // Nếu đây là danh mục mặc định, hiển thị thông báo cảnh báo và không xóa
         alert('Bạn không thể xóa danh mục mặc định')
         return
      }
      const confirm = window.confirm('bạn chắc chưa')
      if (confirm) {
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
}
