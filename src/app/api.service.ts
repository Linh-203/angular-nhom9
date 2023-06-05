import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
@Injectable({
   providedIn: 'root'
})
export class ApiService {
   constructor(private http: HttpClient) {}
   baseUrl = 'http://localhost:8000/api'
   httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json'
      })
   }
}
