import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IProducts } from 'src/common/products'
import { favoriteProductsFake } from 'src/data/products'

@Component({
   selector: 'app-detail-product',
   templateUrl: './detail-product.component.html',
   styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
   quantity: number = 1
   product: IProducts | undefined = {} as IProducts
   increaseQuantity() {
      this.quantity++
   }

   decreaseQuantity() {
      if (this.quantity > 1) {
         this.quantity--
      }
   }

   fakeSize = [
      {
         value: 'm',
         name: 'M'
      },
      {
         value: 'l',
         name: 'L'
      },
      {
         value: 'xl',
         name: 'XL'
      }
   ]
   fakeIce = [
      {
         value: '10',
         name: '10'
      },
      {
         value: '50',
         name: '50'
      },
      {
         value: '100',
         name: '100'
      }
   ]
   favoriteProducts = favoriteProductsFake
   id: string = ''
   constructor(private route: ActivatedRoute, http: HttpClient) {}

   ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
         this.id = params.get('id') || ''
         this.product = favoriteProductsFake.find((p) => p.id === this.id)
      })
   }
   private dataSubmit = {
      product: this.product,
      quantity: this.quantity,
      options: {
         size: this.fakeSize[0].value,
         ice: this.fakeIce[0].value,
         sugar: this.fakeIce[0].value
      }
   }
   onChangeRadio(event: any) {
      this.dataSubmit.options = { ...this.dataSubmit.options, [event.target.name]: event.target.value }
      
   }
}
