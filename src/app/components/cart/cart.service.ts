import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/api.service'
import { InputCart } from 'src/common/cart'

@Injectable({
   providedIn: 'root'
})
export class CartExtService {
   constructor(private apiService: ApiService, private http: HttpClient) {}
   getCart() {
      this.http
         .get(`${this.apiService.baseUrl}/cart`, this.apiService.httpOptions)
         .subscribe((value) => console.log(value))
   }
   addToCart(data: InputCart, userId: string) {
      this.http
         .post(`${this.apiService.baseUrl}cart/${userId}`, data, this.apiService.httpOptions)
         .toPromise()
         .then((res) => console.log(res))
         .catch((err) => console.log(err))
   }
}
