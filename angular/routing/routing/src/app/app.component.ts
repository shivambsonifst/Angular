import { HostListener ,Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  /* Navigation bar  */
  title:string = 'routing';
  name:string  = "Shivam Soni";
  
  /* Directive */
  color = '';


  /* HostListener & HostBinding */
  counter = 0;
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }

  namepipeList = ["Shivam" , "Ritik " , "Aman"];
  datepipeList = ["2023-10-20" , "2001-05-10 " , "2005-01-06"];
  
  decimalDataList:Array<number> = [123.85458, 568.2456,957.2546 , 587.3587 , 3548.2485 ];

}
