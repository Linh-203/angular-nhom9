import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponentComponent } from './pages/category/category-component/category-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page/not-found-page-component/not-found-page-component.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NewComponent } from './pages/new/new.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: DetailProductComponent },
  { path: 'category', component: CategoryComponentComponent },
  { path: 'new', component: NewComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pay', component: PayComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: NotFoundPageComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
