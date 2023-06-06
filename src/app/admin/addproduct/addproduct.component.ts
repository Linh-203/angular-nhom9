import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  public addproductForm!: FormGroup
  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient
    
 ) {}
  ngOnInit(): void {
    this.addproductForm = this.FormBuilder.group({
       
       productname: new FormControl('', [Validators.required, Validators.minLength(6)]),
       productprice: new FormControl('', [Validators.required, Validators.minLength(6), Validators.min(1)]),
       productdesc: new FormControl('', [Validators.required, Validators.minLength(6)])
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
