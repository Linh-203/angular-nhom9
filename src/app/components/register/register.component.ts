import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/pages/auth/auth.service'
import { ISignup } from 'src/common/user'
import { FormControl } from '@angular/forms'
import { AbstractControl } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   public signupForm!: FormGroup
   loading = false
   msgFromServer = ''
   constructor(
      private FormBuilder: FormBuilder,
      private authService: AuthService,
      public dialogRef: MatDialogRef<RegisterComponent>
   ) {}
   ngOnInit(): void {
      this.signupForm = this.FormBuilder.group({
         email: new FormControl('', [Validators.required, Validators.email]),
         name: new FormControl('', [Validators.required]),
         password: new FormControl('', [Validators.required, Validators.minLength(6)]),
         confirmPassword: new FormControl('', [Validators.required])
      })
      // this.signupForm.get('confirmPassword')?.setValidators(this.matchPassword.bind(this.signupForm))
   }
   private matchPassword(ctr: AbstractControl) {
      const password = ctr.get('password')?.value
      const confirmPassword = ctr.get('confirmPasword')?.value
      const ctrConfirmPassword = ctr.get('confirmPassword')
      const errors = ctr.get('confirmPassword')?.errors
      if (password !== confirmPassword && confirmPassword !== '') {
         ctrConfirmPassword?.setErrors({ ...errors, not_matching: true })
         return { confirmPassword: { value: ctrConfirmPassword?.value } }
      } else {
         ctrConfirmPassword?.setErrors({ ...errors })
         return { confirmPassword: { value: ctrConfirmPassword?.value } }
      }
   }
   async signUp() {
      try {
         this.loading = true
         const data = this.signupForm?.value as ISignup
         if (this.signupForm.invalid) {
            this.loading = false
            return
         }
         const res = await this.authService.signUp(data)
         this.loading = false
         this.msgFromServer = res?.message!
         if (res?.data) {
            this.dialogRef.close()
            location.reload()
         }
      } catch (error) {
         this.loading = false
         this.msgFromServer = 'Something wrong, try again !'
         console.log(error)
      }
   }
}
