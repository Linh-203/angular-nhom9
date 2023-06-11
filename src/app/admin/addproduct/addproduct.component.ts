import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api.service'
@Component({
   selector: 'app-addproduct',
   templateUrl: './addproduct.component.html',
   styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   public productForm!: FormGroup

   categories!: any[]

   constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router,
      private apiService: ApiService
   ) {}

   ngOnInit() {
      this.http.get('http://localhost:8000/api/categories').subscribe((data: any) => {
         this.categories = data.categories
      })

      this.productForm = this.formBuilder.group({
         name: new FormControl('', [Validators.required, Validators.minLength(3)]),
         price: new FormControl('', [Validators.required, Validators.min(1)]),
         image: ['', Validators.required],
         categoryId: ['', Validators.required],
         desc: ['', Validators.required]
      })
   }
   browseFiles(): void {
      const element: HTMLElement = document.querySelector('input[type="file"]') as HTMLElement
      element.click()
   }
   onFileSelected(event: any) {
      console.log(event.target.files)
      const formData = new FormData()
      formData.append('images', event.target.value)
      try {
         this.http
            .post(`${this.apiService.baseUrl}/images/upload`, formData, this.apiService.httpOptions)
            .subscribe((data) => {
               console.log(data)
            })
      } catch (error) {
         console.log(error)
      }
   }
   addProduct() {
      // Thực hiện thêm sản phẩm
      const product = this.productForm.value
      const apiUrl = `http://localhost:8000/api/products/`
      this.http
         .post(apiUrl, product, {
            headers: {
               authorization: 'Bearer' + localStorage.getItem('token')
            }
         })
         .subscribe((res: any) => {
            this.router.navigate(['admin/products'])
         })
   }
}
