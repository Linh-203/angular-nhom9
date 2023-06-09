import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
   selector: 'app-add-cate',
   templateUrl: './add-cate.component.html',
   styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {
   public cateForm!: FormGroup

   constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

   ngOnInit() {
      const whitespaceValidator = (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (value && value.trim().length === 0) {
          return { 'whitespace': true };
        }
        return {
      
        };
      }
      console.log(whitespaceValidator);
      this.cateForm = this.formBuilder.group({
        name: new FormControl ('', [Validators.required, Validators.minLength(3), whitespaceValidator ]),
      });
    }
    

   addCate() {

      if (this.cateForm.invalid) {
         this.cateForm.markAllAsTouched()
         this.cateForm.updateValueAndValidity()
         return
      }
      // Thực hiện thêm sản phẩm
      const cate = this.cateForm.value
      console.log(this.cateForm)

      const apiUrl = 'http://localhost:8000/api/categories/'
      this.http
         .post(apiUrl, cate, {
            headers: {
               authorization: 'Bearer' + localStorage.getItem('token')
            }
         })
         .subscribe((res: any) => {
            console.log(res)
            this.router.navigate(['admin/category'])
         })
   }
}
