import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { HeaderComponent } from '../header/header.component'
import { IProductRes, IProducts } from 'src/common/products'
import { ApiService } from 'src/app/api.service'
import { Subscription } from 'rxjs'

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.css']
})
export class SearchComponent {
   constructor(
      private http: HttpClient,
      public dialogRef: MatDialogRef<HeaderComponent>,
      private apiService: ApiService
   ) {}
   loading: boolean = false
   value: string = ''
   private timeId: any = null
   products: IProducts[] = []
   message: string = ''
   observable: Subscription = {} as Subscription
   handleResetValue() {
      this.value = ''
      this.products = []
   }
   handleChange() {
      if (this.value.trim() === '') {
         this.products = []
         return
      }
      if (this.timeId !== null) {
         clearTimeout(this.timeId)
      }
      this.timeId = setTimeout(() => {
         this.timeId = null
         this.loading = true
         this.observable = this.http
            .get<IProductRes>(`${this.apiService.baseUrl}/products?_q=${this.value}`, this.apiService.httpOptions)
            .subscribe(
               (value) => {
                  this.products = value.docs
               },
               (error) => {
                  this.message = error
                  console.log(error)
               },
               () => {
                  this.loading = false
               }
            )
         //  observable.unsubscribe()
      }, 1000)
   }
   closeDialog() {
      this.dialogRef.close()
      if (this.observable !== ({} as Subscription)) {
         this.observable.unsubscribe()
      }
   }
}
