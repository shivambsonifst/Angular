import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [Location, {provide:LocationStrategy, useClass:PathLocationStrategy}]
})
export class AboutComponent {

  pathName:string = "";

constructor(private location: Location){ }


/* location Module */
goBack(){
  this.location.back()
}

goForward(){
  this.location.forward();
}
getPath(){
  console.log(this.location.path());
  this.pathName = this.location.path();
}

}
