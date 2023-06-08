import { OnInit } from '@angular/core'
import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { IProducts } from 'src/common/products'

@Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.css']
})
export class ProductComponent {
   constructor() {}
   @Input() product: IProducts = {} as IProducts
}
