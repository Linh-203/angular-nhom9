import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { ActivatedRoute } from '@angular/router'
import { IProducts } from 'src/common/products'
import { HttpClient } from '@angular/common/http';
@Component({
   selector: 'app-update',
   templateUrl: './update.component.html',
   styleUrls: ['./update.component.css']
})
export class UpdateComponent {
   public updateproductForm!: FormGroup
   product: IProducts | undefined = {} as IProducts
   id: string = ''
   constructor(private route: ActivatedRoute,
       private http: HttpClient,
       private FormBuilder: FormBuilder,) {}

   ngOnInit(): void {

      
      this.updateproductForm = this.FormBuilder.group({
       
         productname: new FormControl('', [Validators.required, Validators.minLength(6)]),
         productprice: new FormControl('', [Validators.required, Validators.minLength(6), Validators.min(1)]),
         productdesc: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
      
      this.route.paramMap.subscribe((params) => {
         this.id = params.get('id') || ''
         let apiUrl = 'http://localhost:8000/api/products/' + this.id
         this.http.get(apiUrl).subscribe((response: any) => {
            this.product = response
            console.log(response);
            
         })
      })



     this.getCategory()
   }
   categories:any
   getCategory(){
    const apiUrl = "http://localhost:8000/api/categories" ;
    this.http.get(apiUrl).subscribe(
      (res: any) => {
        this.categories = res.categories;
        console.log(this.categories);
        
      }
    )
  }

  
}
