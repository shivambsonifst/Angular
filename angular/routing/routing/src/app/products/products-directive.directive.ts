import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appProductsDirective]'
})
export class ProductsDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Input() title!: string;
  @Input() list: any;

  ngOnInit(): void {
    console.log("inside console.")
    console.log("user data: ", this.title, this.list);
  }
}
