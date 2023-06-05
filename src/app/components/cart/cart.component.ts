import { Icart } from './../../../common/cart'
import { Component, OnInit } from '@angular/core'
import { CartExtService } from './cart.service'
import { ApiService } from 'src/app/api.service'
import { ActivatedRoute, Router } from '@angular/router'
import { GlobalStateService } from 'src/app/global-state.service'
import { AuthService } from 'src/app/pages/auth/auth.service'

@Component({
   selector: 'app-cart',
   templateUrl: './cart.component.html',
   styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   constructor(private authService: AuthService, private router: Router, private cartService: CartExtService) {}
   cart = {} as Icart
   loading = false
   userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)._id : ''
   ngOnInit(): void {
      ;(async () => {
         try {
            if (this.userId === '') return
            const res = await this.cartService.getCart(this.userId)
            this.cart = res!
         } catch (error: any) {
            this.loading = false
            if (error.error?.unAuth) {
               this.authService.clearToken()
            }
         }
      })()
      const token = this.authService.getToken()
      if (!token) {
         this.router.navigateByUrl('/login')
         return
      }
   }
   async handleRemoveProductInCart(productId: string) {
      try {
         const res = await this.cartService.removeProductInCart(this.userId, productId)
         console.log(res)
      } catch (error) {
         console.log(error)
      }
   }
}
