import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Inventory } from './inventory/inventory.component';
import { TableComponent } from './inventory/table/table.component';
import { SortByPartNumberPipe } from './inventory/pipes/sort-by-part-number.pipe';
import { SortByNamePipe } from './inventory/pipes/sort-by-name.pipe';
import { SearchPipe } from './inventory/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Inventory,
    TableComponent,
    SortByPartNumberPipe,
    SortByNamePipe,
    SearchPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
