import { Component } from '@angular/core';
import { favoriteProductsFake } from 'src/data/products';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getData()
  }
  favoriteProducts = favoriteProductsFake
  selectedSortOrder: any;
  filteredProducts:any
  getData(){
    let apiUrl = "http://localhost:8000/api/products" ;
  this.http.get(apiUrl).subscribe(
    (res: any) => {
      
      console.log(res);

      this.filteredProducts = res.docs
    }

  )
  }
  
  onSortOrderChange() {
   

    if (this.selectedSortOrder) {

      let apiUrl = "http://localhost:8000/api/products/?_sort=price&_order=" + this.selectedSortOrder;
      this.http.get(apiUrl).subscribe(
        (res: any) => {
          
          console.log(res);

          this.filteredProducts = res.docs
        }

      )

    }
  }

  // searchKeyword: string = '';
  // filteredProducts = [...this.favoriteProducts];
  // search(e: any) {
  //   console.log(e.target.searchKeyword.value)
  //   if (e.target.searchKeyword.value != '') {
  //     this.filteredProducts = this.favoriteProducts.filter(product => product.name.toLowerCase().includes(e.target.searchKeyword.value.toLowerCase()));

  //   }
  //   else {
  //     this.filteredProducts = [...this.favoriteProducts];
  //   }
  // }



}
