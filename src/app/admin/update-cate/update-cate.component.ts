import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
@Component({
   selector: 'app-update-cate',
   templateUrl: './update-cate.component.html',
   styleUrls: ['./update-cate.component.css']
})
export class UpdateCateComponent implements OnInit {
   public cateForm: FormGroup = this.formBuilder.group({
      name: new FormControl ('', [Validators.required, Validators.minLength(6)]),
   })
   cateId: string = ''
   constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private route: ActivatedRoute,
      private router: Router
   ) {
      this.route.params.subscribe((params) => {
         this.cateId = params['id']
         this.http.get(`http://localhost:8000/api/categories/${params['id']}`).subscribe((response: any) => {
            this.cateForm.patchValue({
               name: response.name
            })
         })
      })
   }

   ngOnInit() {}

   updateCate() {
      const cate = {
         name: this.cateForm.value.name
      }
      this.http
         .patch('http://localhost:8000/api/categories/' + this.cateId, cate, {
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
