import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductInCartComponent } from './components/product-in-cart/product-in-cart.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoryComponentComponent } from './pages/category/category-component/category-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page/not-found-page-component/not-found-page-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';


import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { NewComponent } from './pages/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    ProductInCartComponent,
    BannerComponent,
    CategoryComponentComponent,
    NotFoundPageComponentComponent,
    DefaultLayoutComponent,
    ProductComponent,
    DetailProductComponent,
    LoginComponent,
    RegisterComponent,

    CartComponent,

    NewComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule , FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
