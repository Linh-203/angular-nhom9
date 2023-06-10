import { Component, EventEmitter, Input, Output } from '@angular/core'
interface Iradio {
   value: string
   name: string
}
@Component({
   selector: 'app-radio',
   templateUrl: './radio.component.html',
   styleUrls: ['./radio.component.css']
})
export class RadioComponent {
   constructor() {
      this.listRadio = []
      this.nameValue = ''
   }
   @Input() radioValue: any // m
   @Input() onChangeRadio = (event: any) => {}
   @Input() nameValue: string
   @Input() listRadio: Iradio[]

   handleOnchange = (event: any) => {
      return this.onChangeRadio(event)
   }
  
}
