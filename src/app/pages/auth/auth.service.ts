import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Route, Router } from '@angular/router'
import { ApiService } from 'src/app/api.service'
import { ILogin, ISignup, IUser } from 'src/common/user'
@Injectable({
   providedIn: 'root'
})
export class AuthService {
   constructor(private http: HttpClient, private apiService: ApiService, private router: Router) {
      this.dataUser = {} as IUser
   }
   dataUser: IUser
   async signIn(data: ILogin) {
      const response = await this.http
         .post<IUser>(`${this.apiService.baseUrl}/signin`, data, this.apiService.httpOptions)
         .toPromise()
      this.storeLocal(response)
      return response
   }
   async signUp(data: ISignup) {
      const response = await this.http
         .post<IUser>(`${this.apiService.baseUrl}/signup`, data, this.apiService.httpOptions)
         .toPromise()
      this.storeLocal(response)
      return response
   }
   logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.router.navigateByUrl('/products', { skipLocationChange: true }).then(() => {
         console.log('run route')
         this.router.navigate(['/'])
      })
   }
   storeLocal(response: any) {
      this.dataUser = response?.data
      if (response?.token) {
         localStorage.setItem('token', response.token)
         localStorage.setItem('user', JSON.stringify({ ...response?.data, token: undefined }))
      }
      this.router.navigateByUrl('/')
   }
   getToken() {
      const token = localStorage.getItem('token')
      return token
   }
   clearToken() {
      return localStorage.removeItem('token')
   }
}
