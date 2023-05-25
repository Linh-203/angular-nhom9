import { Component ,NgZone } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { favoriteProductsFake } from 'src/data/products';
import { HttpClient } from '@angular/common/http';
import { count } from 'rxjs';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

 
  id: string = "";
  product: any;
  infoUser:any
  countCMT:any
  constructor( private http: HttpClient, private route: ActivatedRoute) { }
 
  idLocal = JSON.parse(localStorage.getItem('idUser')!);
  ngOnInit(): void {
    this.getData()
  
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "";
     
    let apiUrlCMT =  "http://localhost:8000/api/comment/"+this.id;
    this.http.get(apiUrlCMT).subscribe(
      (response: any) => {
        
        this.comment = response.comment;
       
      
        for(let item of this.comment){
         
          this.infoUser=item.idUser
          // console.log( this.infoUser.name);
        }
        
      },
      (error: any) => {
        console.log(error);
      }
    );
      console.log(this.id);
      let apiUrl = "http://localhost:8000/api/products/"+this.id;
      this.http.get(apiUrl).subscribe(
      
        (response: any) => {
          this.product = response
          console.log(response);
        })
      // this.product = favoriteProductsFake.find(p => p.id === this.id);
      this.formData.idProduct = this.id;
    });
   
  }
  
  quantity: number = 1;
  idProduct: string = ""
  formData = {
    content: "",
    idUser: JSON.parse(localStorage.getItem('idUser')!),
    idProduct: this.id

  }
  comments:any
  addComment() {
    console.log(this.formData);
      let apiUrl = "http://localhost:8000/api/comment";
      this.http.post(apiUrl, this.formData).subscribe(
        (response: any) => {
          console.log(response);
          this.comments = response;
          console.log(this.comments);
         window.location.reload()
        },
        (error: any) => {
          console.log(error);
        }
      );
    


  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  comment:any
  userComment:any
 
 
  favoriteProducts:any
  getData() {
    let apiUrl = "http://localhost:8000/api/products";
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response);
        this.favoriteProducts = response.docs;
        console.log(this.favoriteProducts);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  selectedSortOrder: any;

  onSortOrderChange() {
    console.log(123);
   
    if (this.selectedSortOrder) {
 
      let apiUrl = "http://localhost:3000/products/?_sort=price&_order=" + this.selectedSortOrder;
      this.http.get(apiUrl).subscribe(
        (res :any)=>{
            this.favoriteProducts = res
        }
      
      )
       
    } 
  }

 
 
}