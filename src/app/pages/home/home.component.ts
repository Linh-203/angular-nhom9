import { Component, ViewChild } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'bootstrap'
import 'slick-carousel'
@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor(private http: HttpClient) {}
   ngOnInit(): void {
      this.getProduct(1)
   }
   homeProducts: any

   getProduct(page: number): void {
      const limit = 12 // chỉ định số lượng sản phẩm cần lấy
      const apiUrl = `http://localhost:8000/api/products/?_limit=${limit}&_page=${page}`
      this.http.get(apiUrl).subscribe((res: any) => {
         console.log(res)
         this.homeProducts = res.docs
      })
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
