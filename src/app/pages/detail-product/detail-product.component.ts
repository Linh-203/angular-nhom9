import { Component ,NgZone } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { favoriteProductsFake } from 'src/data/products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

 
  id: string = "";
  product: any;
  constructor( private http: HttpClient, private route: ActivatedRoute) { }
 
  idLocal = JSON.parse(localStorage.getItem('idUser')!);
  ngOnInit(): void {
    this.getData()
    this.getComment()
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "";
      console.log(this.id);
      this.product = favoriteProductsFake.find(p => p.id === this.id);
      this.formData.productId = this.id;
    });
  }
  
  quantity: number = 1;
  idProduct: string = ""
  formData = {
    content: "",
    userId: JSON.parse(localStorage.getItem('idUser')!),
    productId: this.id

  }
  products:any
  addComment() {
    console.log(this.formData);
      let apiUrl = "http://localhost:3000/comment";
      this.http.post(apiUrl, this.formData).subscribe(
        (response: any) => {
          console.log(response);
          this.products = response;
          console.log(this.products);
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
  async getComment() {

    let apiUrl =  "http://localhost:3000/comment";
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response);
        this.comment = response;
        console.log(this.comment);
        for (let item of this.comment) {
          console.log(item.userId);
          let apiUser = "http://localhost:3000/users/"+item.userId;
       
            this.http.get(apiUser).subscribe(
              (response) => {
                this.userComment = response
                console.log(this.userComment.id);
              }
            );
          
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  favoriteProducts:any
  getData() {
    let apiUrl = "http://localhost:3000/products";
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response);
        this.favoriteProducts = response;
        console.log(this.products);
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