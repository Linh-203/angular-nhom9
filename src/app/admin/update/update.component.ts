import { Component } from '@angular/core'
import { favoriteProductsFake } from 'src/data/products'
import { ActivatedRoute } from '@angular/router'
import { IProducts } from 'src/common/products'
@Component({
   selector: 'app-update',
   templateUrl: './update.component.html',
   styleUrls: ['./update.component.css']
})
export class UpdateComponent {
   favoriteProducts = favoriteProductsFake
   product: IProducts | undefined = {} as IProducts
   id: string = ''
   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
         this.id = params.get('id') || ''
         this.product = favoriteProductsFake.find((p) => p._id === this.id)
      })
   }
}
