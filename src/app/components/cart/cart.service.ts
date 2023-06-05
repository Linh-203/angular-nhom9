import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/api.service'
import { Icart, InputCart } from 'src/common/cart'

@Injectable({
   providedIn: 'root'
})
export class CartExtService {
   constructor(private apiService: ApiService, private http: HttpClient) {
      this.cart = {} as Icart
   }
   cart: Icart
   getCart(userId: string) {
      return this.http.get<Icart>(`${this.apiService.baseUrl}/cart/${userId}`, this.apiService.httpOptions).toPromise()
   }
   addToCart(data: InputCart, userId: string) {
      return this.http.post(`${this.apiService.baseUrl}/cart/${userId}`, data, this.apiService.httpOptions).toPromise()
   }
   removeProductInCart(userId: string, productId: string) {
      return this.http
         .delete(`${this.apiService.baseUrl}/cart/${userId}?idProduct=${productId}`, this.apiService.httpOptions)
         .toPromise()
   }
   changeQuantity(userId: string, productId: string) {
      return this.http
         .put(`${this.apiService.baseUrl}/cart/${userId}?idProduct=${productId}`, this.apiService.httpOptions)
         .toPromise()
   }
}
