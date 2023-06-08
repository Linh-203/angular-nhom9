import { category } from './../../../data/products';
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
@Component({
   selector: 'app-addproduct',
   templateUrl: './addproduct.component.html',
   styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {


  // public signupForm!: FormGroup
  //  loading = false
  //  msgFromServer = ''
  //  constructor(
  //     private FormBuilder: FormBuilder,
  //     private authService: AuthService,
  //     // public dialogRef: MatDialogRef<AddproductComponent>
  //  ) {}
  //  ngOnInit(): void {
  //     this.signupForm = this.FormBuilder.group({

  //        name: new FormControl('', [Validators.required]),
  //        price: new FormControl('', [Validators.required]),
  //        image: new FormControl('', [Validators.required]),
  //        category: new FormControl('', [Validators.required]),
  //        desc: new FormControl('', [Validators.required]),


  //     })
  //     // this.signupForm.get('confirmPassword')?.setValidators(this.matchPassword.bind(this.signupForm))
  //  }
  //  private matchPassword(ctr: AbstractControl) {
  //     const password = ctr.get('password')?.value
  //     const confirmPassword = ctr.get('confirmPasword')?.value
  //     const ctrConfirmPassword = ctr.get('confirmPassword')
  //     const errors = ctr.get('confirmPassword')?.errors
  //     if (password !== confirmPassword && confirmPassword !== '') {
  //        ctrConfirmPassword?.setErrors({ ...errors, not_matching: true })
  //        return { confirmPassword: { value: ctrConfirmPassword?.value } }
  //     } else {
  //        ctrConfirmPassword?.setErrors({ ...errors })
  //        return { confirmPassword: { value: ctrConfirmPassword?.value } }
  //     }
  //  }
  //  async signUp() {
  //     try {
  //        this.loading = true
  //        const data = this.signupForm?.value as ISignup
  //        if (this.signupForm.invalid) {
  //           this.loading = false
  //           return
  //        }
  //        const res = await this.authService.signUp(data)
  //        this.loading = false
  //        this.msgFromServer = res?.message!
  //       //  if (res?.token) {
  //       //     this.dialogRef.close()
  //       //  }
  //     } catch (error) {
  //        this.loading = false
  //        this.msgFromServer = 'Something wrong, try again !'
  //        console.log(error)
  //     }
  //  }



  public productForm!: FormGroup

   categories!: any[]

   constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

   ngOnInit() {
      this.http.get('http://localhost:8000/api/categories').subscribe((data: any) => {
         this.categories = data.categories
         console.log(data)
      })

      this.productForm = this.formBuilder.group({
         name: new FormControl ('', [Validators.required, Validators.minLength(3)]),
         price: new FormControl ('', [Validators.required, Validators.min(1)]),
         image: ['', Validators.required],
         categoryId: ['', Validators.required],
         desc: ['', Validators.required]
      })
   }

   addProduct() {
      // Thực hiện thêm sản phẩm
      const product = this.productForm.value
      console.log(this.productForm)


    const apiUrl = `http://localhost:8000/api/products/`;
    this.http.post(apiUrl, product, {
      headers: {
        "authorization": "Bearer" + localStorage.getItem("token")
      }
    }).subscribe((res: any) => {
      console.log(res);
    });
  }

}
