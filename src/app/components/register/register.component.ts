import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/pages/login-register/auth.service'
import { ISignup } from 'src/common/user'
import { FormControl } from '@angular/forms'
import { AbstractControl } from '@angular/forms'
@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   public signupForm!: FormGroup
   public dataSubmit = this.signupForm?.value as ISignup

   constructor(private FormBuilder: FormBuilder, private authService: AuthService) {}
   ngOnInit(): void {
      this.signupForm = this.FormBuilder.group({
         email: new FormControl('', [Validators.required, Validators.email]),
         name: new FormControl('', [Validators.required]),
         password: new FormControl('', [Validators.required, Validators.minLength(6)]),
         confirmPassword: new FormControl('', [Validators.required])
      })
      this.signupForm.get('confirmPassword')?.setValidators(this.matchPassword.bind(this.signupForm))
   }
   private matchPassword(ctr: AbstractControl) {
      const password = ctr.get('password')?.value
      const confirmPassword = ctr.get('confirmPasword')?.value
      const ctrConfirmPassword = ctr.get('confirmPassword')
      const errors = ctr.get('confirmPassword')?.errors
      if (password !== confirmPassword && confirmPassword !== '') {
         ctrConfirmPassword?.setErrors({ ...errors, not_matching: true })
      } else {
         ctrConfirmPassword?.setErrors({ ...errors })
      }
      return null
   }
   signUp(data: ISignup) {
      try {
         if (this.signupForm.invalid) {
            return
         }
         return this.authService.signUp(data)
      } catch (error) {
         console.log(error)
      }
   }
}
