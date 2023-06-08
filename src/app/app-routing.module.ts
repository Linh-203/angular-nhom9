import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { CategoryComponentComponent } from './pages/category/category-component/category-component.component'
import { NotFoundPageComponentComponent } from './pages/not-found-page/not-found-page-component/not-found-page-component.component'

import { CartComponent } from './components/cart/cart.component'

import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NewComponent } from './pages/new/new.component';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { ProductPageComponent } from './pages/product-page/product-page.component'
import { PayComponent } from './components/pay/pay.component'
import { ListproductsComponent } from './admin/listproducts/listproducts.component'
import { StatisticalComponent } from './admin/statistical/statistical.component'
import { AddproductComponent } from './admin/addproduct/addproduct.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { UpdateComponent } from './admin/update/update.component'
import { AddCateComponent } from './admin/add-cate/add-cate.component'
import { UpdateCateComponent } from './admin/update-cate/update-cate.component'
import { DeleteCateComponent } from './admin/delete-cate/delete-cate.component'
import { ListcateComponent } from './admin/listcate/listcate.component'
import { FavoriteComponent } from './pages/favorite/favorite.component'

const routes: Routes = [
   {
      path: '',
      component: DefaultLayoutComponent,
      children: [
         { path: '', component: HomeComponent },
         { path: 'categories', component: CategoryComponentComponent },
         { path: 'products/:id', component: DetailProductComponent },
         { path: 'new', component: NewComponent },
         { path: 'cart', component: CartComponent,data:{} },
         { path: 'pay', component: PayComponent },
         { path: 'products', component: ProductPageComponent },
         { path: 'favorite', component: FavoriteComponent }
      ]
   },
   // Ứng dụng phía admin
   {
      path: 'admin',
      component: LayoutAdminComponent,
      children: [
         // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
         { path: '', component: DashboardComponent },
         { path: 'products', component: ListproductsComponent },
         { path: 'category', component: ListcateComponent },
         { path: 'statistical', component: StatisticalComponent },
         { path: 'addcategory', component: AddCateComponent },
         { path: 'updateCate/:id', component: UpdateCateComponent },
         { path: 'deleteCate', component: DeleteCateComponent },
         { path: 'addproduct', component: AddproductComponent },
         { path: 'updateproduct/:id', component: UpdateComponent }
      ]
   },
   { path: '**', component: NotFoundPageComponentComponent }
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
