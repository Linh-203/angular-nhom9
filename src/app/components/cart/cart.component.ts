import { Icart } from './../../../common/cart'
import { Component, OnInit } from '@angular/core'
import { CartExtService } from './cart.service'
import { ApiService } from 'src/app/api.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
   selector: 'app-cart',
   templateUrl: './cart.component.html',
   styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   constructor(private cartService: CartExtService, private authService: ApiService, private router: Router) {
      this.cart = {}
   }
   cart: Icart
   ngOnInit(): void {
      const token = this.authService.getToken()
      if (!token) {
         this.router.navigateByUrl('/login')
         return
      }
      this.cart = this.cartService.getCart()
      console.log(this.cart)
   }
}
