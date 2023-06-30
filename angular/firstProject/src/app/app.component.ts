import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  /*home page   */
  title = 'First Project';
  name = 'Shivam Soni';

  /* ngFor   */
  movietTitle: string = "Top 10 Movies";
  movies: Movie[] = [
    { title: 'Zootopia', director: 'Byron Howard, Rich Moore', cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate: 'March 4, 2016' },
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016' },
    { title: 'Captain America: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016' },
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016' },
  ]


  /* ngif else   */

  show: boolean = true;

  //ngswitch
  public dropDownValue = "";
  SetDropDownValue(dropValue: any) {
    this.dropDownValue = dropValue.target.value;
  }


  //[disabled]
  isDisabled = true;
  flip() {
    this.isDisabled = !this.isDisabled;
  }
  myClick() {
    alert('was clicked')
  }


  /* component life cycle */
  data: number = 100;

  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  fnAddNumber(): void {
    this.data += 100;
  }

  deleteNumber(): void {
    this.data -= 10;
  }
}


/* class for ngFor */
class Movie {
  title!: string;
  director!: string;
  cast!: string;
  releaseDate!: string;

}

/* class for ngSwitch */
class item {
  name!: string;
  val!: number;
}  
