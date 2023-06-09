import { AuthService } from '../../pages/auth/auth.service'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { GlobalStateService } from 'src/app/global-state.service'
import { ILogin, ISignup } from 'src/common/user'
@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm!: FormGroup
   loading = false
   msgFromServer = ''
   constructor(
      private FormBuilder: FormBuilder,
      private loginService: AuthService,
      public dialogRef: MatDialogRef<LoginComponent>,
      private globalState: GlobalStateService,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.loginForm = this.FormBuilder.group({
         email: new FormControl('', [Validators.required, Validators.email]),
         password: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
   }
   async signIn() {
      try {
         this.loading = true
         const data = this.loginForm?.value as ILogin
         if (this.loginForm.invalid) {
            this.loading = false
            return
         }
         const res = await this.loginService.signIn(data)
         this.loading = false
         this.msgFromServer = res?.message!
         if (res?.data) {
            this.dialogRef.close()
            this.globalState.userInfo = res?.data
            if (res.data.role === 'admin') {
               this.router.navigateByUrl('/admin')
               return;
            }
            location.reload()
         }
      } catch (error) {
         this.loading = false
         this.msgFromServer = 'Something wrong, try again !'
         console.log(error)
      }
   }
}
