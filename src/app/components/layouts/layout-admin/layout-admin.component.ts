import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { GlobalStateService } from 'src/app/global-state.service'

@Component({
   selector: 'app-layout-admin',
   templateUrl: './layout-admin.component.html',
   styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
   constructor(private globalState: GlobalStateService, private router: Router) {}
   ngOnInit(): void {
      console.log(this.globalState.userInfo?.role)
      if (this.globalState.userInfo?.role !== 'admin') {
         this.router.navigateByUrl('/')
      }
   }
}
