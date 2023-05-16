import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSlideToggleModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
