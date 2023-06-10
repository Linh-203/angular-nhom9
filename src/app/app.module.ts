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
import { MatPaginatorModule } from '@angular/material/paginator'

import { ProductComponent } from './components/product/product.component'
import { CartComponent } from './components/cart/cart.component'
import { ProductPageComponent } from './pages/product-page/product-page.component'
import { NewComponent } from './pages/new/new.component'
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { FavoriteComponent } from './pages/favorite/favorite.component'
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { HttpClientModule } from '@angular/common/http'
import { RadioComponent } from './components/radio/radio.component'
import { ProductsComponent } from './components/products/products.component'
import { PayComponent } from './components/pay/pay.component'
import { MatBadgeModule } from '@angular/material/badge'
import { MatTabsModule } from '@angular/material/tabs'
import { SidebarComponent } from './admin/sidebar/sidebar.component'
import { ListproductsComponent } from './admin/listproducts/listproducts.component'
import { StatisticalComponent } from './admin/statistical/statistical.component'
import { AddproductComponent } from './admin/addproduct/addproduct.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { UpdateComponent } from './admin/update/update.component'

import { httpInterceptorProviders } from './http-interceptors'
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { GlobalStateService } from './global-state.service'
import { AddCateComponent } from './admin/add-cate/add-cate.component'
import { UpdateCateComponent } from './admin/update-cate/update-cate.component'
import { DeleteCateComponent } from './admin/delete-cate/delete-cate.component'
import { ListcateComponent } from './admin/listcate/listcate.component'
import { SearchComponent } from './components/search/search.component';
import { ProductInTableComponent } from './components/product-in-table/product-in-table.component'

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
      SidebarComponent,
      ListproductsComponent,
      StatisticalComponent,
      FavoriteComponent,
      RadioComponent,
      AddproductComponent,
      DashboardComponent,
      ProductsComponent,
      UpdateComponent,
      ProductPageComponent,
      AddCateComponent,
      UpdateCateComponent,
      DeleteCateComponent,
      ListcateComponent,
      SearchComponent,
      ProductInTableComponent
   ],
   imports: [
      BrowserModule,
      MatIconModule,
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
      MatDialogModule,
      HttpClientModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatTabsModule,
      MatBadgeModule
   ],
   providers: [httpInterceptorProviders, GlobalStateService],
   bootstrap: [AppComponent]
})
export class AppModule {}
