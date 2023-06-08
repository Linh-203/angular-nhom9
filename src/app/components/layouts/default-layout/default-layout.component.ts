import { ChangeDetectorRef, Component } from '@angular/core'
import { GlobalStateService } from '../../../global-state.service'
@Component({
   selector: 'app-default-layout',
   templateUrl: './default-layout.component.html',
   styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
   constructor(private glbState: GlobalStateService) {}
  
}
