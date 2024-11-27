import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ShopComponent } from './home/shop/shop.component';
import { CartComponent } from './home/cart/cart.component';
import { MenComponent } from './home/shop/men/men.component';
import { WomenComponent } from './home/shop/women/women.component';
import { JwellaryComponent } from './home/shop/jwellary/jwellary.component';
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BreadcrumbComponent,
    ShopComponent,
    CartComponent,
    MenComponent,
    WomenComponent,
    JwellaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
