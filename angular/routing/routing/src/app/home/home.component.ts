import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


 /* parent to child eventEmitter */ 
eventsSubject : Subject<void> = new Subject<void>();

emitEventToChild() {
  this.eventsSubject.next();


}

/* Piping */
today = new Date(2023, 5 , 1);



}
