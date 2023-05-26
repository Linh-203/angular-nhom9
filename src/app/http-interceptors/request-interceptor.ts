import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { ApiService } from '../api.service'

@Injectable({ providedIn: 'root' })
export class TokenInterceptor {
   constructor(private authService: ApiService) {}
   intercep(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getToken()
      const authReqs = req.clone({
         headers: req.headers.append('Authorization', authToken!)
      })
      return next.handle(authReqs)
   }
}
