import { IProducts } from './../../../common/products'
import { Component, NgZone } from '@angular/core'
import { OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { fakeIce, fakeSize } from 'src/data/products'
import { HttpClient } from '@angular/common/http'
import { GlobalStateService } from 'src/app/global-state.service'
import { CartExtService } from 'src/app/components/cart/cart.service'
import { InputCart } from 'src/common/cart'
import { MatDialog } from '@angular/material/dialog'

@Component({
   selector: 'app-detail-product',
   templateUrl: './detail-product.component.html',
   styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
   id: string = ''
   infoUser: any
   countCMT: any
   product: IProducts = {} as IProducts
   private productState: IProducts = {} as IProducts
   constructor(
      private http: HttpClient,
      private route: ActivatedRoute,
      private cartService: CartExtService,
      private globalState: GlobalStateService,
      private dialog: MatDialog
   ) {}

   userDontOverwride = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : {}
   idLocal = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)?._id : ''
   countFv: any
   idP: any
   ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
         this.id = params.get('id') || ''
         let apiUrl = 'http://localhost:8000/api/products/' + this.id
         this.http.get(apiUrl).subscribe((response: any) => {
            this.product = response
            this.globalState.setProductData(response)
            this.productState = this.globalState.getProductData()
         })
         // this.product = favoriteProductsFake.find(p => p.id === this.id);
         this.formData.idProduct = this.id
         this.favoriteData.idProduct = this.id
         this.idP = this.id
         this.getData()
         this.getCMT()
         this.getFavorite()
         this.checkHeart()
      })
   }

   quantity: number = 1
   idProduct: string = ''
   formData = {
      content: '',
      idUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)._id : '',
      idProduct: this.id
   }
   favoriteData = {
      idUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)._id : '',
      idProduct: this.id
   }

   fv: any
   getFavorite() {
      let apiGet = 'http://localhost:8000/api/favorites/' + this.idP
      this.http.get(apiGet).subscribe((res: any) => {
         if (res.favoriteProduct) {
            this.countFv = res.favoriteProduct.length
         } else {
            this.countFv = 0
         }
      })
   }
   comment: any
   getCMT() {
      let apiUrlCMT = 'http://localhost:8000/api/comment/' + this.id
      this.http.get(apiUrlCMT).subscribe(
         (response: any) => {
            this.comment = response.comment
            this.countCMT = this.comment.length
            for (let item of this.comment) {
               this.infoUser = item.idUser
            }
         },
         (error: any) => {
            console.log(error)
         }
      )
   }

   isFavorite: boolean = false
   heart: any
   checkHeart() {
      let api = 'http://localhost:8000/api/favorites/'
      this.http.get(api).subscribe((res: any) => {
         this.heart = res.favoriteProduct
         const check = this.heart.find((item: any) => item.idUser == this.idLocal && item.idProduct == this.idP)
         if (check) {
            this.isFavorite = true
         } else {
            this.isFavorite = false
         }
      })
   }
   comments: any
   favoriteProducts: any
   getData() {
      let apiUrl = 'http://localhost:8000/api/products'
      this.http.get(apiUrl).subscribe(
         (response: any) => {
            this.favoriteProducts = response.docs
         },
         (error: any) => {
            console.log(error)
         }
      )
   }
   addComment() {
      if (this.formData.idUser) {
         let apiUrl = 'http://localhost:8000/api/comment'
         this.http.post(apiUrl, this.formData).subscribe(
            (response: any) => {
               this.comments = response
               this.getCMT()
            },
            (error: any) => {
               console.log(error)
            }
         )
      } else {
         alert('Bạn chưa đăng nhập')
      }
   }
   addFavorite() {
      if (this.idLocal) {
         let apiUrl = 'http://localhost:8000/api/favorites'
         this.http.get(apiUrl).subscribe((res: any) => {
            this.fv = res.favoriteProduct
            let checkP = this.fv.find(
               (item: any) => item.idUser == this.favoriteData.idUser && item.idProduct == this.favoriteData.idProduct
            )

            if (checkP) {
               let removeFv =
                  'http://localhost:8000/api/favorites/' + this.favoriteData.idUser + '/' + this.favoriteData.idProduct
               this.http.delete(removeFv).subscribe((res: any) => {
                  this.isFavorite = false
                  alert('Đã xóa khỏi sản phẩm yêu thích')
                  this.getFavorite()
               })
            } else {
               this.http.post(apiUrl, this.favoriteData).subscribe((res: any) => {
                  this.getFavorite()
                  this.isFavorite = true
                  alert('Đã thêm vào sản phẩm yêu thích')
               })
            }
         })
      } else {
         alert('Bạn chưa đăng nhập')
      }
   }
   removeComment(id: string) {
      let api = 'http://localhost:8000/api/comment/' + this.id
      this.http.delete(api).subscribe((res: any) => {
         // this.getCMT()
      })
   }
   increaseQuantity() {
      this.quantity++
   }

   decreaseQuantity() {
      if (this.quantity > 1) {
         this.quantity--
      }
   }
   fakeSize = fakeSize
   fakeIce = fakeIce

   public options = {
      size: this.fakeSize[2].value,
      ice: this.fakeIce[2].value,
      sugar: this.fakeIce[2].value
   }
   onChangeRadio(event: any) {
      this.options = { ...this.options, [event.target.name]: event.target.value }
   }
   loadingBtn = false
   async handleAddToCart() {
      const data: InputCart = {
         productId: this.productState._id,
         name: this.productState.name,
         price: this.productState.price,
         image: this.productState.image,
         quantity: this.quantity,
         options: this.options
      }
      try {
         this.loadingBtn = true
         const res = await this.cartService.addToCart(data, this.userDontOverwride._id)
         await this.globalState.handleGetCart(this.userDontOverwride._id)
         location.reload()
         this.loadingBtn = false
      } catch (error) {
         this.loadingBtn = false
         console.log(error)
      }
   }
}
