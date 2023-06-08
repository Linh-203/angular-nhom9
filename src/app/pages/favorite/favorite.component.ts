import { Component, Output } from '@angular/core'
import { favoriteProductsFake } from 'src/data/products'
import { HttpClient } from '@angular/common/http'
interface IUser {
   _id: string
}
@Component({
   selector: 'app-favorite',
   templateUrl: './favorite.component.html',
   styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
   constructor(private http: HttpClient) {}
   @Output() public products: any
   ngOnInit(): void {
      this.getData()
   }
   favorite: any
   getData() {
      let user: IUser = JSON.parse(localStorage.getItem('user')!)._id
      if (user) {
         let api = 'http://localhost:8000/api/favorite/' + user
         this.http.get(api).subscribe(
            (res: any) => {
               this.products = res.favoriteProduct
            },
            (err: any) => {
               console.log(err)
            }
         )
      }
   }
   idUser: any
   removeFv(idP: string) {
      this.idUser = JSON.parse(localStorage.getItem('user')!)._id
      let api = 'http://localhost:8000/api/favorites/' + this.idUser + '/' + idP
      this.http.delete(api).subscribe((res: any) => {
         console.log(res)
         this.getData()
         alert('Đã xóa khỏi sản phẩm yêu thích')
      })
   }
}
