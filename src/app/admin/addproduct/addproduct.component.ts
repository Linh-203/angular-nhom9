import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  public addproductForm!: FormGroup
  constructor(
    private FormBuilder: FormBuilder,
    
 ) {}
  ngOnInit(): void {
    this.addproductForm = this.FormBuilder.group({
       
       productname: new FormControl('', [Validators.required, Validators.minLength(6)]),
       productprice: new FormControl('', [Validators.required, Validators.minLength(6)]),
       productdesc: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
 }
}
