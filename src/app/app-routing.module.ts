import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './home/shop/shop.component';
import { CartComponent } from './home/cart/cart.component';
import { MenComponent } from './home/shop/men/men.component';
import { WomenComponent } from './home/shop/women/women.component';
import { JwellaryComponent } from './home/shop/jwellary/jwellary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' },children:[
  {path:'shop',component:ShopComponent,data:{ breadcrumb: 'Shop'},children:[
    {path:'men',component:MenComponent,data:{breadcrumb:'Men'}},
    {path:'women',component:WomenComponent,data:{breadcrumb:'Women'}},
    {path:'jwellary',component:JwellaryComponent,data:{breadcrumb:'Jwellary'}}
  ]},
  {path:'cart',component:CartComponent,data:{breadcrumb:'Cart'}}
] },
  { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
  { path: 'contact', component: ContactComponent, data: { breadcrumb: 'Contact' }, },
  {path: '', redirectTo:'home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
