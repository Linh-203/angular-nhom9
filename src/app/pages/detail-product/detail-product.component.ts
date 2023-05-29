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
  infoUser:any
  countCMT:any
  constructor( private http: HttpClient, private route: ActivatedRoute) { }
 
  idLocal = JSON.parse(localStorage.getItem('idUser')!);
  countFv:any
  idP:any
  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "";
     
   
      console.log(this.id);
      let apiUrl = "http://localhost:8000/api/products/"+this.id;
      this.http.get(apiUrl).subscribe(
      
        (response: any) => {
          this.product = response
          console.log(this.product);
        })
      // this.product = favoriteProductsFake.find(p => p.id === this.id);
      this.formData.idProduct = this.id;
      this.favoriteData.idProduct = this.id;
      this.idP=this.id
      this.getData()
      this.getCMT()
      this.getFavorite()
      this.checkHeart()
    });
   
  }
  
  quantity: number = 1;
  idProduct: string = ""
  formData = {
    content: "",
    idUser: JSON.parse(localStorage.getItem('idUser')!),
    idProduct: this.id

  }
  favoriteData={
    idUser: JSON.parse(localStorage.getItem('idUser')!),
    idProduct: this.id
  }

  fv:any
  getFavorite(){
    console.log(this.idP);
    
    let apiGet = "http://localhost:8000/api/favorites/"+this.idP
    this.http.get(apiGet).subscribe(
      (res:any)=>{
        this.countFv= res.favoriteProduct.length
        console.log(this.countFv);
        
      }
    )
  }
  getCMT(){
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
  }
  isFavorite: boolean = false;
  heart:any
  checkHeart(){
    let api = "http://localhost:8000/api/favorites/"
    this.http.get(api).subscribe(
      (res:any)=>{
        console.log(res);
        this.heart = res.favoriteProduct
        const check =  this.heart.find((item:any)=>item.idUser== this.idLocal && item.idProduct == this.idP)
        if(check){
          this.isFavorite = true;
          console.log( this.isFavorite);
        }else{
          this.isFavorite = false;
          console.log( this.isFavorite);
        }
       

      }
    )
  }
  addFavorite(){
    if(this.idLocal){

    
  let apiUrl = "http://localhost:8000/api/favorites"
  this.http.get(apiUrl).subscribe(
    (res:any)=>{
      console.log(res.favoriteProduct);
      this.fv = res.favoriteProduct
      let checkP = this.fv.find((item:any )=>item.idUser == this.favoriteData.idUser && item.idProduct == this.favoriteData.idProduct )
      
        if(checkP){
          let removeFv = "http://localhost:8000/api/favorites/"+this.favoriteData.idUser+"/"+this.favoriteData.idProduct
          this.http.delete(removeFv).subscribe(
            (res:any)=>{
              console.log(res);
             this.getFavorite()
             this.isFavorite = false;
            alert("Đã xóa khỏi sản phẩm yêu thích");
            }
          )
        }else{
          this.http.post(apiUrl,this.favoriteData).subscribe(
            (res:any)=>{
              console.log(res);
              this.getFavorite();
              this.isFavorite = true;
              alert("Đã thêm vào sản phẩm yêu thích");
            }
          )
        }
      
      
    }
  )
  }else{
    alert("no")
  }
  

  }
  comments:any

   addComment() {
    console.log(this.formData);
    if(this.formData.idUser){
      let apiUrl = "http://localhost:8000/api/comment";
      this.http.post(apiUrl, this.formData).subscribe(
        (response: any) => {
          console.log(response);
          this.comments = response;
          console.log(this.comments);
          this.getCMT()
        },
        (error: any) => {
          console.log(error);
        }
      );
      }else{
        alert("Bạn chưa đăng nhập")
      }
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
