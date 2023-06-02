import { Component, ViewChild, OnInit } from '@angular/core'
import { productsFake } from 'src/data/products'
import { favoriteProductsFake } from 'src/data/products'
// import { IUser } from 'src/common/user';
// import $ from 'jquery';
import 'bootstrap'
import 'slick-carousel'
import { ProductService } from '../product-page/product.service'
import { IProducts } from 'src/common/products'
@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   constructor(private productService: ProductService) {}
   products: IProducts[] = []
   loading = false
   async handleGetProducts() {
      try {
         this.loading = true
         const res = await this.productService.getAllProduct()
         if (res?.docs?.length! > 0) {
            this.products = res?.docs!
         }
      } catch (error) {
         this.loading = false
         console.log(error)
      }
   }
   ngOnInit(): void {
      this.handleGetProducts()
   }
   slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
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
