import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IgxCarouselModule } from 'igniteui-angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

import { ProductInCartComponent } from './components/product-in-cart/product-in-cart.component'
import { BannerComponent } from './components/banner/banner.component'
import { CategoryComponentComponent } from './pages/category/category-component/category-component.component'
import { NotFoundPageComponentComponent } from './pages/not-found-page/not-found-page-component/not-found-page-component.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component'

import { DetailProductComponent } from './pages/detail-product/detail-product.component'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'

import { CartComponent } from './components/cart/cart.component'
import { ProductComponent } from './pages/product/product.component'
import { NewComponent } from './pages/new/new.component'
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { LoginRegisterComponent } from './pages/login-register/login-register.component'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { HttpClientModule } from '@angular/common/http'
import { RadioComponent } from './components/radio/radio.component'
import { ProductsComponent } from './components/products/products.component'
import { PayComponent } from './components/pay/pay.component'
import { SidebarComponent } from './admin/sidebar/sidebar.component'
import { ListproductsComponent } from './admin/listproducts/listproducts.component'
import { StatisticalComponent } from './admin/statistical/statistical.component'
import { httpInterceptorProviders } from './http-interceptors'

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      FooterComponent,
      HeaderComponent,

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
      LayoutAdminComponent,
      LoginRegisterComponent,
      SidebarComponent,
      ListproductsComponent,
      StatisticalComponent,

      RadioComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      IgxCarouselModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCheckboxModule,
      CommonModule,
      ReactiveFormsModule,
      SlickCarouselModule,
      HttpClientModule
   ],
   providers: [httpInterceptorProviders],
   bootstrap: [AppComponent]
})
export class AppModule {}
