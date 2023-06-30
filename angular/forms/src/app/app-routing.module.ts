import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:"home", component:HomeComponent },
  { path:"template-driven-form", component:TemplateDrivenFormComponent },
  { path:"reactiveform", component:ReactiveformComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [TemplateDrivenFormComponent, ReactiveformComponent];