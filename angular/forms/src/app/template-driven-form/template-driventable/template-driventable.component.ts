import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driventable',
  templateUrl: './template-driventable.component.html',
  styleUrls: ['./template-driventable.component.css']
})
export class TemplateDriventableComponent implements OnInit{

  @Input() formTable!:{ name: string; age: number; phoneNumber: number; address: string; }[];

  ngOnInit(){
    console.log("CAlled");
    console.log(this.formTable); 
  }
}
