import { Injectable } from '@angular/core'
import { HttpEvent, HttpErrorResponse, HttpResponse, HttpHandler, HttpRequest } from '@angular/common/http'
import { ApiService } from '../api.service'
import { AuthService } from '../pages/auth/auth.service'

@Injectable({ providedIn: 'root' })
export class TokenInterceptor {
   constructor(private authService: AuthService) {}
   intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getToken()
      if (authToken) {
         const authReqs = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${authToken}`)
         })
         return next.handle(authReqs)
      }
      return next.handle(req)
   }
}
