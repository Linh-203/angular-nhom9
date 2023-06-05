import { Injectable } from '@angular/core'
import { Icart } from 'src/common/cart'
import { IProducts } from 'src/common/products'
import { IUser } from 'src/common/user'

@Injectable({
   providedIn: 'root'
})
export class GlobalStateService {
   constructor() {}
   public userInfo = {} as {
      name: string
      email: string
      defaultAvatar: string
      role: string
   }
   public productInfo: IProducts = {} as IProducts
   setProductData(payload: IProducts) {
      this.productInfo = payload
   }
   getProductData() {
      return this.productInfo
   }
}
