import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

// States = ['Surat', 'Ahmedabad','Gandhinagar', 'Mumbai'];

formTable: { name: string , age:number , phoneNumber:number, address:string}[] = [
  { "name": "Shivam", "age": 22 , "phoneNumber": 123344, "address":"surat"},
];


formSubmit(form: NgForm ) {
  this.formTable.push(form.value);
  console.log(this.formTable);
  return this.formTable;
}

}
