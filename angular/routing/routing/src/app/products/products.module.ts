import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDirectiveDirective } from './products-directive.directive';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDirectiveDirective],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductsModule { }
