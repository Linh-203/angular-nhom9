import { Component } from '@angular/core';
import { favoriteProductsFake } from 'src/data/products';
import { HttpClient } from '@angular/common/http';
interface IUser{
  _id:string
}
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  constructor( private http: HttpClient) { }
  products:any

  ngOnInit(): void {
   this.getData()
 
  }
  favorite:any
  getData(){
   
   let user:IUser = JSON.parse(localStorage.getItem('user')!)._id
    if(user){
      let api = "http://localhost:8000/api/favorite/"+user
      this.http.get(api).subscribe(
        (res:any)=>{
        
          this.products = res.favoriteProduct
          console.log( this.products);
         
         
        },
        (err:any)=>{
          console.log(err);
          
        }
      )
    }
  }

}
