import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponentComponent } from './pages/category/category-component/category-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page/not-found-page-component/not-found-page-component.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { CartComponent } from './components/cart/cart.component';

import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NewComponent } from './pages/new/new.component';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { ProductComponent } from './pages/product/product.component';
import { PayComponent } from './components/pay/pay.component';
import { ListproductsComponent } from './admin/listproducts/listproducts.component';
import { StatisticalComponent } from './admin/statistical/statistical.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'categories', component: CategoryComponentComponent },
      { path: 'products/:id', component: DetailProductComponent },
      { path: 'new', component: NewComponent },
      { path: 'cart', component: CartComponent },
      { path: 'pay', component: PayComponent },
      { path: 'products', component: ProductComponent },
      { path: 'signup', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },

  // Ứng dụng phía admin
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ListproductsComponent },
      { path: 'statistical', component: StatisticalComponent },
    ],
  },
  { path: '**', component: NotFoundPageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
