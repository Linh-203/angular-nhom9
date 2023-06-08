import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core'
import { favoriteProductsFake } from 'src/data/products'
import { category } from 'src/data/products'
import { MatDialog } from '@angular/material/dialog'
import { RegisterComponent } from '../register/register.component'
import { LoginComponent } from '../login/login.component'
import { AuthService } from 'src/app/pages/auth/auth.service'
import { GlobalStateService } from 'src/app/global-state.service'
import { Icart } from 'src/common/cart'
import { Router } from '@angular/router'
import { SearchComponent } from '../search/search.component'
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
      private glbState: GlobalStateService,
      private route: Router
   ) {}
   openDialog(type: 'signin' | 'signup') {
      if (type === 'signup') this.dialog.open(RegisterComponent)
      if (type === 'signin') this.dialog.open(LoginComponent)
   }
   loading = this.glbState.loading
   cart: Icart = this.glbState.cartInfo
   productsInCart = this.glbState.productsInCart
   userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)._id : ''
   async handleGetCart() {
      this.loading = true
      await this.glbState.handleGetCart(this.userId)
      this.cart = this.glbState.cartInfo
      this.productsInCart = this.glbState.productsInCart
      this.loading = false
      return this.productsInCart
   }
   ngOnInit(): void {
      this.handleGetCart()
   }
   handleOpenSearch() {
      this.dialog.open(SearchComponent, { disableClose: true })
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
      return this.glbState.getUserInfo()
   }
   category = category
   product = favoriteProductsFake
   handleLogout() {
      location.reload()
      return this.authService.logout()
   }
}
