import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.css']
})
export class SearchComponent {
   constructor(private http: HttpClient) {}
   value: string = ''
   private debounceValue(value: string) {
      let historyValue = ''
      setTimeout(() => {
         historyValue = value
      }, 1000)
      return historyValue
   }
   handleChange() {
      if (this.debounceValue(this.value) === this.value) {
         console.log('call api')
      }
      console.log('not call')
   }
}
