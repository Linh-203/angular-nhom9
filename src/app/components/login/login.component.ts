import { AuthService } from './../../pages/login-register/auth.service';
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ILogin, ISignup } from 'src/common/user'
@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm!: FormGroup
   constructor(private FormBuilder: FormBuilder, private loginService: AuthService) {}
   ngOnInit(): void {
      this.loginForm = this.FormBuilder.group({
         email: ['', Validators.required],
         password: ['', Validators.required]
      })
   }
   dataSubmit: ILogin = {
      email: '',
      password: ''
   }
   handleChange(event: any) {
      this.dataSubmit = { ...this.dataSubmit, [event.target.name]: event.target.value }
   }
   signIn(data: ILogin) {
      try {
         console.log(data)
         return this.loginService.signIn(data)
      } catch (error) {
         console.log(error)
      }
   }
}
