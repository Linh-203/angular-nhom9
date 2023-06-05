import { Component,Input } from '@angular/core'
import { IProducts } from 'src/common/products'

@Component({
   selector: 'app-product-in-cart',
   templateUrl: './product-in-cart.component.html',
   styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent {
   @Input() product:IProducts = {} as IProducts
}
