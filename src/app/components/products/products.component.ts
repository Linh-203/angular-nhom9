import { Component, Input, ViewChild } from '@angular/core'
import { ProductService } from 'src/app/pages/product-page/product.service'
import { IProducts } from 'src/common/products'
import 'bootstrap'
import 'slick-carousel'
@Component({
   selector: 'app-products',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.css']
})
export class ProductsComponent {
   constructor(private productService: ProductService) {}
   @Input() listProduct: IProducts[] = []
   loading = false
   slideConfig = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500
   }
   @ViewChild('slickModal') slickModal: any

   prev() {
      this.slickModal.slickPrev()
   }

   next() {
      this.slickModal.slickNext()
   }
   slickInit(e: any) {
      console.log('slick initialized')
   }

   breakpoint(e: any) {
      console.log('breakpoint')
   }

   afterChange(e: any) {
      console.log('afterChange')
   }

   beforeChange(e: any) {
      console.log('beforeChange')
   }
}
