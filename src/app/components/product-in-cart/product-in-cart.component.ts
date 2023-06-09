import { Component, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { GlobalStateService } from 'src/app/global-state.service'
import { AuthService } from 'src/app/pages/auth/auth.service'
import { IProducts } from 'src/common/products'

@Component({
   selector: 'app-product-in-cart',
   templateUrl: './product-in-cart.component.html',
   styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent {
   @Input() type?: 'searchResult' | 'cartHeader'
   @Input() product: IProducts = {} as IProducts
   userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)._id : ''
   constructor(private dialog: MatDialog, private authService: AuthService, private glbState: GlobalStateService) {}
   async handleRemoveCart(productId: string) {
      await this.glbState.handleRemoveCart(this.userId, productId)
      location.reload()
   }
}
