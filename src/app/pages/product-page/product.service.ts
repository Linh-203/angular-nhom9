import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/api.service'
import { IProductRes } from 'src/common/products'


@Injectable({
   providedIn: 'root'
})
export class ProductService {
   constructor(private http: HttpClient, private api: ApiService) { }

   async getAllProduct() {
      const response = await this.http.get<IProductRes>(`${this.api.baseUrl}/products`, this.api.httpOptions).toPromise()
      return response
   }
   async getAllByPrice(min: number, max: number) {
      const response = await this.http.get<IProductRes>(`${this.api.baseUrl}/products-price-range?price_min=${min}&price_max=${max}`, this.api.httpOptions).toPromise()
      return response
   }
}
