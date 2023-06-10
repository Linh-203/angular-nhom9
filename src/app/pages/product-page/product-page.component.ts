import { Component, ViewChild } from '@angular/core'
import { favoriteProductsFake } from 'src/data/products'
import { HttpClient } from '@angular/common/http'

import { MatPaginator } from '@angular/material/paginator'
import { OnInit, Output, EventEmitter } from '@angular/core'

@Component({
   selector: 'app-product-page',
   templateUrl: './product-page.component.html',
   styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
   @ViewChild(MatPaginator) paginator: MatPaginator
   constructor(private http: HttpClient) {
      this.paginator = {} as MatPaginator
   }
   pagination = {
      hasNextPage: true,
      hasPrevPage: false,
      limit: 1,
      nextPage: 1,
      page: 1,
      pagingCounter: 1,
      prevPage: null,
      totalDocs: 1,
      totalPages: 1
   }

   limit = 6

   formattedPagination: any = {}

   ngOnInit(): void {
      this.getProduct(1)
      this.getCategory()
   }

   favoriteProducts = favoriteProductsFake
   selectedSortOrder: any
   filteredProducts: any
   categories: any
   pageIndex: any
   onPageChange(event: any): void {
      this.pageIndex = event.pageIndex // Lấy chỉ mục trang mới
      this.limit = event.pageSize // Lấy kích thước trang
      this.getProduct(this.pageIndex + 1) // Lấy dữ liệu cho trang mới
   }

   getProduct(page: number): void {
      const apiUrl = `http://localhost:8000/api/products/?_limit=${this.limit}&_page=${page}`
      this.http.get(apiUrl).subscribe((res: any) => {
         this.filteredProducts = res.docs
         this.formattedPagination.length = res.totalDocs
         this.formattedPagination.pageIndex = res.page - 1
         this.formattedPagination.pageSize = res.limit
         this.formattedPagination.pageSizeOptions = [3, 6]
         this.formattedPagination.totalPages = res.totalPages
         this.formattedPagination.page = res.page
      })
   }
   ByPrice(min: number, max: number) {
      const apiUrl = `http://localhost:8000/api/products-price-range?price_min=${min}&price_max=${max}`
      this.http.get(apiUrl).subscribe((res: any) => {
         this.filteredProducts = res.docs
      })
   }

   currentProduct() {
      const apiUrl = 'http://localhost:8000/api/products/?_limit=10&page=1'
      this.http.get(apiUrl).subscribe((res: any) => {
         this.filteredProducts = res.docs
      })
   }

   selectCate(id: any) {
      const apiUrl = `http://localhost:8000/api/categories/${id}`
      this.http.get(apiUrl).subscribe((res: any) => {
         this.filteredProducts = res.products
      })
   }

   getCategory() {
      const apiUrl = 'http://localhost:8000/api/categories'
      this.http.get(apiUrl).subscribe((res: any) => {
         this.categories = res.categories
      })
   }

   onSortOrderChange() {
      if (this.selectedSortOrder) {
         const apiUrl = `http://localhost:8000/api/products/?_sort=price&_order=${this.selectedSortOrder}`
         this.http.get(apiUrl).subscribe((res: any) => {
            this.filteredProducts = res.docs
         })
      }
   }
}
