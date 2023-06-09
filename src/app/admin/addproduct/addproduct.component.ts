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

   onFileSelected(event: any) {
      const file = event.target.files[0]
      if (file) {
         const reader = new FileReader()
         reader.readAsDataURL(file)
         reader.onload = () => {
            this.imageUrl = reader.result as string
            this.productForm.patchValue({
               image: file
            })
         }
      }
   }

   browseFiles(): void {
      const element: HTMLElement = document.querySelector('input[type="file"]') as HTMLElement
      element.click()
   }

   public dropped(files: NgxFileDropEntry[]) {
      for (const droppedFile of files) {
         if (droppedFile.fileEntry.isFile) {
            const fileEntry = droppedFile.fileEntry as FileSystemFileEntry
            fileEntry.file((file: any) => {
               this.productForm.controls['image'].setValue(file)
               this.uploadImage(file)
            })
         }
      }
   }

   public fileOver(event: any) {
      console.log(event)
   }

   public fileLeave(event: any) {
      console.log(event)
   }

   public uploadImage(file: any) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'angular')

      axios
         .post('https://api.cloudinary.com/v1_1/desv7hthb/image/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
         })
         .then((response) => {
            console.log(response.data.secure_url)
            this.imageUrl = response.data.secure_url
         })
         .catch((error) => {
            console.log(error)
         })
   }

   addProduct() {
      const product = this.productForm.value
      product.image = this.imageUrl

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
            this.router.navigate(['admin/products'])
         })
   }
}