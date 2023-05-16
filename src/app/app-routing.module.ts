import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponentComponent } from './pages/category/category-component/category-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page/not-found-page-component/not-found-page-component.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: NotFoundPageComponentComponent },
  { path: '**', component: NotFoundPageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
