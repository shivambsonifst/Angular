import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-reactiveformtable',
  templateUrl: './reactiveformtable.component.html',
  styleUrls: ['./reactiveformtable.component.css']
})
export class ReactiveformtableComponent {

  @Input() formTable!:{ name: string; age: number; phoneNumber: number; address: string; }[];

  ngOnInit(){
    console.log("CAlled");
    console.log(this.formTable); 
  }

}
