import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { products } from './products';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { SortByPartNumberPipe } from './pipes/sort-by-part-number.pipe';
import { SearchPipe } from './pipes/search.pipe';


export interface IProduct {
  productId: number;
  partNumber: number;
  productName: string;
  size: string;
  colors: string[] | string;
  description: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [SortByNamePipe, SortByPartNumberPipe, SearchPipe]
})
export class Inventory {
  title = 'product';
  products = products;
  reactiveForm!: FormGroup;
  reactiveFormInput!: FormGroup;
  searchTable!: IProduct | null;
  saveButtonState = true;
  addButtonValue = false;
  productIdRead = false;
  partNumberRead = false;

  /* Color array */
  Data: Array<any> = [
    { name: 'Red', value: 'Red', checked: false },
    { name: 'Blue', value: 'Blue', checked: false },
    { name: 'Black', value: 'Black', checked: false },
    { name: 'Green', value: 'Green', checked: false },
  ];


  constructor(private formBuilder: FormBuilder, private sortByNamePipe: SortByNamePipe, private sortByPartNumberPipe: SortByPartNumberPipe, private searchPipe: SearchPipe) {

  }

  /* Initial function */
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      productId: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), uniqueIdValidator]),
      partNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(100), uniquePartNumberValidator]),
      productName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      size: new FormControl(null, [Validators.required]),
      colors: this.formBuilder.array([], [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]),
    });
    this.reactiveFormInput = new FormGroup({
      inputValue: new FormControl(''),
    });
    /* Local Storage SetItems */
    localStorage.setItem("Products", JSON.stringify(products))
  }


  /* Getting Datas from checkbox */
  onCheckboxChange(e: any) {
    const colors: FormArray = this.reactiveForm.get('colors') as FormArray;
    if (e.target.checked) {
      console.log("e.target.checked", e.target.checked)
      colors.push(new FormControl(e.target.value));
      this.Data.forEach(checkbox => {
        if (e.target.value === checkbox.value) {
          checkbox.checked = true;
        }
      });
    }
    if (!e.target.checked) {
      console.log("!e.target.checked", !e.target.checked)
      let i: number = 0;
      colors.controls.forEach((item: any) => {
        colors.removeAt(i);
        if (item.value === e.target.value) {
          this.Data.forEach(checkbox => {
            if (e.target.value !== checkbox.value) {
              checkbox.checked = false;
            }
          });
          if (item.value === null) {
            colors.removeAt(i);
          }
          return;
        }
        i++;
      });
    }
  }


  /* Add Button */
  onSubmit(form: FormGroup) {
    this.Data.forEach(checkbox => {
      if (this.reactiveForm.value.colors.includes(checkbox.value)) {
        checkbox.checked = false;
      }
    });
    this.products.push({
      productId: this.reactiveForm.value.productId,
      partNumber: this.reactiveForm.value.partNumber,
      productName: this.reactiveForm.value.productName,
      size: this.reactiveForm.value.size,
      colors: this.reactiveForm.value.colors,
      description: this.reactiveForm.value.description
    });
    const colors: FormArray = this.reactiveForm.get('colors') as FormArray;
    form.reset();
    this.reactiveForm.reset(this.reactiveForm.value);
    /* Local Storage SetItems */
    localStorage.setItem("Products", JSON.stringify(products))
    /* Local Storage GetItems */
    console.log("Products :- ", localStorage.getItem("Products"));
    localStorage.getItem("Products");
  }

  /* Show Button */
  showAllDatas() {
    this.searchTable = null
  }

  /* Delete Button */
  deleteButton(form: FormGroup) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === parseInt(this.reactiveFormInput.value.inputValue) || products[i].productName === this.reactiveFormInput.value.inputValue) {
        products.splice(i, 1);
        /* Local Storage SetItems */
        localStorage.setItem("Products", JSON.stringify(products))
        /* Local Storage GetItems */
        console.log("Products :- ", localStorage.getItem("Products"));
        localStorage.getItem("Products");
        form.reset();
        return products;
      }
    }
    form.reset();
    return
  }

  /* Modify Button */
  modifyButton() {
    this.Data.forEach(checkbox => {
      if (this.reactiveForm.value.colors.includes(checkbox.value)) {
        checkbox.checked = false;
      }
    });
    this.saveButtonState = false;
    this.addButtonValue = true;

    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === parseInt(this.reactiveFormInput.value.inputValue) || products[i].productName === this.reactiveFormInput.value.inputValue) {
        this.reactiveForm.patchValue({
          productId: products[i].productId,
          partNumber: products[i].partNumber,
          productName: products[i].productName,
          size: products[i].size,
          description: products[i].description,
        })
        this.Data.forEach(checkbox => {
          if (products[i].colors.includes(checkbox.value)) {
            checkbox.checked = true;
          }
        });
        this.productIdRead = true;
        this.partNumberRead = true;
        /* Local Storage SetItems */
        localStorage.setItem("ModifyProducts", JSON.stringify(products[i]))
        /* Local Storage GetItems */
        console.log("Products :- ", localStorage.getItem("ModifyProducts"));
        localStorage.getItem("ModifyProducts");
        return
      }
    }
    return
  }


  /* Save Button */
  saveButton(form: FormGroup, forms: FormGroup) {
    /* Local Storage removeItem */
    localStorage.removeItem('ModifyProducts')

    this.Data.forEach(checkbox => {
      if (this.reactiveForm.value.colors.includes(checkbox.value)) {
        checkbox.checked = false;
      }
    });
    for (let i = 0; i < this.products.length; i++) {
      this.Data.forEach(checkbox => {
        if (products[i].colors.includes(checkbox.value)) {
          checkbox.checked = false;
        }
      });
      if (this.products[i].productId === this.reactiveForm.value.productId) {
        this.products[i].productId = this.reactiveForm.value.productId;
        this.products[i].partNumber = this.reactiveForm.value.partNumber;
        this.products[i].productName = this.reactiveForm.value.productName;
        this.products[i].size = this.reactiveForm.value.size;
        this.products[i].description = this.reactiveForm.value.description;
        console.log("this.reactiveForm.value.colors", this.reactiveForm.value.colors)
        if (this.reactiveForm.value.colors.length > 0) {
          this.products[i].colors = this.reactiveForm.value.colors;
        }
        if (this.reactiveForm.value.colors.length <= 0) {
          this.products[i].colors = this.products[i].colors;
        }
      }
      /* Local Storage SetItems */
      localStorage.setItem("Products", JSON.stringify(products))
      /* Local Storage GetItems */
      console.log("Products :- ", localStorage.getItem("Products"));
      localStorage.getItem("Products");
    }

    this.productIdRead = false;
    this.partNumberRead = false;
    this.saveButtonState = true;
    this.addButtonValue = false;

    form.reset();
    forms.reset();
    return this.products;
  }


  /* Sort By PartNumber Button */
  sortByPartNumber() {
    this.sortByPartNumberPipe.transform(this.products);
    return
  }

  /* Sort By Name Button */
  sortByName() {
    this.sortByNamePipe.transform(this.products);
    return
  }


  /* Delete Button */
  searchButton(form: FormGroup) {
    this.searchTable = (this.searchPipe.transform(this.products, this.reactiveFormInput.value.inputValue));
    form.reset();
    return this.searchTable;
  }


}


/* Custom validator for Product ID */
export function uniqueIdValidator(control: FormControl) {
  for (let product of products) {
    if (product.productId === control.value) {
      return { uniqueId: true };
    }
  }

  return null;
}

/* Custom validator for Part Number */
export function uniquePartNumberValidator(control: FormControl) {
  for (let product of products) {
    if (product.partNumber === control.value) {
      return { uniquePartNumber: true };
    }
  }
  return null;
}