import { Component, Input, OnInit, OnChanges } from '@angular/core'
import { IProducts } from 'src/common/products'
import { fakeIce, fakeSize } from 'src/data/products'
import { CartExtService } from '../cart/cart.service'
import { InputOptions } from 'src/common/cart'

@Component({
   selector: 'app-product-in-table',
   templateUrl: './product-in-table.component.html',
   styleUrls: ['./product-in-table.component.css']
})
export class ProductInTableComponent implements OnChanges {
   constructor(private cartService: CartExtService) {}
   @Input() product: IProducts = {} as IProducts
   userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!)._id : ''
   fakeIce = fakeIce
   fakeSize = fakeSize
   options: any = this.product?.options
   quantity: number = this.product?.quantity!
   ngOnChanges() {
      this.options = this.product?.options
      this.quantity = this.product?.quantity!
   }
   onChangeRadio(event: any) {
      this.options = { ...this.options, [event.target.name]: event.target.value }
      console.log(this.options)
   }
   async handleChangeOptions() {
      try {
         const dataSubmit: InputOptions = { quantity: this.quantity, options: this.options }
         await this.cartService.changeOptions(this.userId, this.product._id, dataSubmit)
         location.reload()
      } catch (error) {
         alert('Something wrong!')
         console.log(error)
      }
   }
   async handleRemoveProductInCart(productId: string) {
      try {
         const res = await this.cartService.removeProductInCart(this.userId, productId)
         location.reload()
         console.log(res)
      } catch (error) {
         console.log(error)
      }
   }
}
