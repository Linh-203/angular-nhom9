import { Injectable } from '@angular/core'
import { IUser } from 'src/common/user'

@Injectable({
   providedIn: 'root'
})
export class GlobalStateService {
   constructor() {}
   public userInfo = {} as {
      name: string
      email: string
      defaultAvatar: string
      role: string
   }
}
