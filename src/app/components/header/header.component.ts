import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ProductInCartComponent } from '../product-in-cart/product-in-cart.component'
import { productsFake } from 'src/data/products'
import { favoriteProductsFake } from 'src/data/products'
import { category } from 'src/data/products'
import { MatDialog } from '@angular/material/dialog'
import { RegisterComponent } from '../register/register.component'
import { LoginComponent } from '../login/login.component'
import { AuthService } from 'src/app/pages/auth/auth.service'
import { GlobalStateService } from 'src/app/global-state.service'
import { Icart } from 'src/common/cart'
import { CartExtService } from '../cart/cart.service'
import { IProducts } from 'src/common/products'
interface IUser {
   _id: string
}
@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   constructor(
      private dialog: MatDialog,
      private authService: AuthService,
      private cartService: CartExtService,
      private glbState: GlobalStateService
   ) {}
   openDialog(type: 'signin' | 'signup') {
      if (type === 'signup') this.dialog.open(RegisterComponent)
      if (type === 'signin') this.dialog.open(LoginComponent)
   }
   loading = false
   cart: Icart = {} as Icart
   productsInCart = [] as IProducts[]
   userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)._id : ''
   ngOnInit(): void {
      ;(async () => {
         try {
            if (this.userId === '') return
            const res = await this.cartService.getCart(this.userId)
            this.cart = res!
            this.productsInCart = this.cart?.data.products
         } catch (error: any) {
            this.loading = false
            if (error.error?.unAuth) {
               this.authService.logout()
            }
         }
      })()
   }
   slides = [
      {
         image: 'https://via.placeholder.com/600x400',
         title: 'Slide 1',
         text: 'This is slide 1'
      },
      {
         image: 'https://via.placeholder.com/600x400',
         title: 'Slide 2',
         text: 'This is slide 2'
      },
      {
         image: 'https://via.placeholder.com/600x400',
         title: 'Slide 3',
         text: 'This is slide 3'
      }
   ]
   getUserInfo() {
      this.glbState.userInfo = JSON.parse(localStorage.getItem('user')!)
      return this.glbState.userInfo
   }
   category = category
   product = favoriteProductsFake
   handleLogout() {
      return this.authService.logout()
   }
   user: IUser = JSON.parse(localStorage.getItem('user')!)
}
