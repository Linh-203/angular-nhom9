import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './request-interceptor'

export const httpInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }]

