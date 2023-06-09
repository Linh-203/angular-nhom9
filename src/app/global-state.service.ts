import { ChangeDetectorRef, Injectable } from '@angular/core'
import { Icart } from 'src/common/cart'
import { IProducts } from 'src/common/products'
import { IUser } from 'src/common/user'
import { AuthService } from './pages/auth/auth.service'
import { CartExtService } from './components/cart/cart.service'

@Injectable({
   providedIn: 'root'
})
export class GlobalStateService {
   constructor(private authService: AuthService, private cartService: CartExtService) {}
   public userInfo = JSON.parse(localStorage.getItem('user')!) 
   public loading = false
   public productInfo: IProducts = {} as IProducts
   public productsInCart = [] as IProducts[]
   public cartInfo: Icart = {} as Icart
   getUserInfo() {
      return this.userInfo
   }
   setProductData(payload: IProducts) {
      this.productInfo = payload
   }
   getProductData() {
      return this.productInfo
   }
   async handleGetCart(userId: string) {
      try {
         if (userId === '') return
         const res = await this.cartService.getCart(userId)
         this.cartInfo = res!
         this.productsInCart = this.cartInfo?.data.products
      } catch (error: any) {
         this.loading = false
         if (error.error?.unAuth) {
            this.authService.logout()
         }
      }
   }
  
   async handleRemoveCart(userId: string, productId: string) {
      try {
         if (userId === '') return
         const res = await this.cartService.removeProductInCart(userId, productId)
         this.cartInfo = res!
         this.productsInCart = this.cartInfo?.data.products
      } catch (error: any) {
         this.loading = false
         if (error.error?.unAuth) {
            this.authService.logout()
         }
      }
   }
}
