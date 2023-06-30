import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDriventableComponent } from './template-driven-form/template-driventable/template-driventable.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveformtableComponent } from './reactiveform/reactiveformtable/reactiveformtable.component';
import { HomeComponent } from './home/home.component';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';
import { Ability , PureAbility } from '@casl/ability';  
import { AbilityModule } from '@casl/angular';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDriventableComponent,
    ReactiveformComponent,
    ReactiveformtableComponent,
    HomeComponent,
    PhoneNumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    AbilityModule
  ],
  providers: [
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }],
  bootstrap: [AppComponent]
})
export class AppModule { }
