import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NameComponent } from './about/name/name.component';
import { AddressComponent } from './about/address/address.component';
import { EmailComponent } from './about/email/email.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path:"home", component:HomeComponent },
  { path:"about", component:AboutComponent,
  children: [
    { path: 'name', component: NameComponent },
    { path: 'address', component: AddressComponent },
    { path: 'email', component: EmailComponent }
  ] },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: 'products', component: ProductsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const  
RoutingComponent = [HomeComponent, AboutComponent];
