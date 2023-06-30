import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NameComponent } from './about/name/name.component';
import { AddressComponent } from './about/address/address.component';
import { EmailComponent } from './about/email/email.component';
import DatasComponent from './home/datas/datas.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';
import { ProductsModule } from './products/products.module';
import { ShopModule } from './shop/shop.module';
import { FirstPipe } from './app.pipe';
import { DisplayPipe } from './app.display';
import { SortPipe } from './app.sort';
import { DecimalPipe } from './app.decimal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NameComponent,
    AddressComponent,
    EmailComponent,
    DatasComponent,
    HighlightDirective,
    RainbowDirective, 
    FirstPipe,
    DisplayPipe,
    SortPipe,
    DecimalPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
