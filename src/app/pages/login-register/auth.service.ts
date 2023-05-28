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
   signIn(data: ILogin) {
      this.http
         .post<IUser>(`${this.apiService.baseUrl}/signin`, data, this.apiService.httpOptions)
         .subscribe((data) => {
            if (data) {
               this.dataUser = data
               localStorage.setItem('token', data.token)
               localStorage.setItem('user', JSON.stringify({ ...data, token: undefined }))
               this.router.navigateByUrl('/')
            }
         })
   }
   signUp(data: ISignup) {
      this.http
         .post<IUser>(`${this.apiService.baseUrl}/signup`, data, this.apiService.httpOptions)
         .subscribe((data) => {
            if (data) {
               this.dataUser = data
               localStorage.setItem('token', data.token)
               localStorage.setItem('user', JSON.stringify({ ...data, token: undefined }))
               this.router.navigateByUrl('/')
            }
         })
   }
}
