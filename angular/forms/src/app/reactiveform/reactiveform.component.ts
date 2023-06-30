import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  phone = '';

  formTable: { name: string, age: number, phoneNumber: number, address: string }[] = [
    { "name": "Dhruv", "age": 24, "phoneNumber": 4242342, "address": "Gandhinagar" },
  ];

  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    console.log(this.reactiveForm.value)
    this.formTable.push(this.reactiveForm.value);
    return this.formTable;
  }

}

/* Custom Validator*/
function ValidatePhone(control: AbstractControl): { [key: string]: any } | null {
  if (control.value && control.value.length != 10) {
    return { 'phoneNumberInvalid': true };
  }
  return null;
}