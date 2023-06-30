import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  
  @HostBinding('style.border') border: string | undefined;
 
  @HostListener('mouseover') 
  onMouseOver() {
    this.border = '2px solid green';
    console.log("Mouse over")
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.border = '';
    console.log("Mouse Leave")
  }

}