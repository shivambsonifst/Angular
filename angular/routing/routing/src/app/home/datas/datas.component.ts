import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export default class DatasComponent implements OnInit {

  /* Component to View */
  view: string = "Component to View";


  /* Two way data binding  */
  val: string = '';
  print: string = '';
  constructor() { this.val }

  submit() {
    this.print = "Two way data binding:- " + this.val;
  }


  /* View to component */
  myFunc() {
    alert('view to component')
  }


  /* parent to child eventEmitter */


  private eventsSubscription!: Subscription;
  @Input() events!: Observable<void>;

  ngOnInit(): void {
    console.log("event parent to child data transfer");
    this.eventsSubscription = this.events.subscribe(() => this.printValues());

  }
  printValues() {
    console.log("event parent to child data transfer");
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }


  /* Piping */
  today = new Date(2023, 5, 1);
  toggle = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }


  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
}
