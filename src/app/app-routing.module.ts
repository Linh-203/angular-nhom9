import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponentComponent } from './pages/category/category-component/category-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page/not-found-page-component/not-found-page-component.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: DetailProductComponent },
  { path: 'category', component: CategoryComponentComponent },
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  { path: '**', component: NotFoundPageComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
