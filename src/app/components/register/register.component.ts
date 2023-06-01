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
<<<<<<< HEAD
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  signUp() {
    const newUser = { ...this.signupForm.value }; // Assign unique id to user
    this.http
      .post<any>('http://localhost:3000/signUpUsers', newUser) // Send the user to the server
      .subscribe(
        (res) => {
          alert('Successfully signed up');
          this.http // Fetch the updated users from the server and set them to localStorage
            .get<any>('http://localhost:3000/signUpUsers')
            .subscribe((users) => {
              localStorage.setItem('signUpUsers:', JSON.stringify(users));
            });
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }
}
=======
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
         if (res?.token) {
            this.dialogRef.close()
         }
      } catch (error) {
         this.loading = false
         this.msgFromServer = 'Something wrong, try again !'
         console.log(error)
      }
   }
}
>>>>>>> 4f567bb8f8c3ba76b014a8e3fd7aaabd2c5e361a
