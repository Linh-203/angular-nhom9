import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop'
import axios from 'axios'
@Component({
   selector: 'app-addproduct',
   templateUrl: './addproduct.component.html',
   styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   public productForm!: FormGroup
   public imageUrl!: string

   categories!: any[]

   constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

   ngOnInit() {
      this.http.get('http://localhost:8000/api/categories').subscribe((data: any) => {
         this.categories = data.categories
      })

      this.productForm = this.formBuilder.group({
         name: new FormControl('', [Validators.required, Validators.minLength(3)]),
         price: new FormControl('', [Validators.required, Validators.min(1)]),
         categoryId: ['', Validators.required],
         desc: ['', Validators.required]
      })
   }

   addProduct() {
      const product = this.productForm.value
      console.log(product)

      const apiUrl = `http://localhost:8000/api/products/`

      this.http
         .post(apiUrl, product, {
            headers: {
               authorization: 'Bearer' + localStorage.getItem('token')
            }
         })
         .subscribe((res: any) => {
            console.log(res)
            // this.router.navigate(['admin/products'])
         })
   }
}
