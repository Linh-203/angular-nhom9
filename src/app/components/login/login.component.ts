import { AuthService } from '../../pages/auth/auth.service'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
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
      public dialogRef: MatDialogRef<LoginComponent>
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
         if (res?.token) {
            this.dialogRef.close()
         }
      } catch (error) {
         this.loading = false
         this.msgFromServer = 'Something wrong, try again !'
         console.log(error)
      }
<<<<<<< HEAD
    );
  }
}
=======
   }
}
>>>>>>> 4f567bb8f8c3ba76b014a8e3fd7aaabd2c5e361a
