import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
   selector: 'app-update',
   templateUrl: './update.component.html',
   styleUrls: ['./update.component.css']
})
export class UpdateComponent {
   public productForm: FormGroup = this.formBuilder.group({
      name: new FormControl ('', [Validators.required]),
      price: new FormControl ('', [Validators.required, Validators.min(1)]),
      image: ['', Validators.required],
      categoryId: ['', Validators.required],
      desc: ['', Validators.required]
   })
   productId: string = ''
   categories!: any[]

   constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private route: ActivatedRoute,
      private router: Router
   ) {
      this.route.params.subscribe((params) => {
         this.productId = params['id']
         this.http.get(`http://localhost:8000/api/products/${params['id']}`).subscribe((response: any) => {
            this.productForm.patchValue({
               name: response.name,
               price: response.price,
               image: response.image,
               categoryId: response.categoryId,
               desc: response.desc
            })
         })
      })



     
   }

   ngOnInit() {
      this.http.get('http://localhost:8000/api/categories').subscribe((data: any) => {
         this.categories = data.categories

         console.log(data)
      })
   }

   updateProduct() {
      const product = {
         name: this.productForm.value.name,
         price: this.productForm.value.price,
         image: this.productForm.value.image,
         categoryId: this.productForm.value.categoryId,
         desc: this.productForm.value.desc
      }

      this.http
         .patch('http://localhost:8000/api/products/' + this.productId, product, {
            headers: {
               authorization: 'Bearer' + localStorage.getItem('token')
            }
         })
         .subscribe((res: any) => {
            console.log(res)
            this.router.navigate(['admin/products'])
         })
   }
}
